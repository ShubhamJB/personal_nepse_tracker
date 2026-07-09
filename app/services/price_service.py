"""
Price service: fetches prices from NEPSE API, upserts to DB, handles failures gracefully.
Never raises for partial or full API failures — always returns a RefreshResult.
"""
import datetime
from decimal import Decimal
from typing import List

from sqlalchemy.ext.asyncio import AsyncSession

from app.repositories.stock_repository import StockRepository
from app.repositories.price_history_repository import PriceHistoryRepository
from app.schemas.price_history import PriceHistoryCreate
from app.schemas.price_service import RefreshResult
from app.models.price_history import PriceSource
from app.services.nepse_client import NepseApiClient, NepseApiError


class PriceService:
    def __init__(self, nepse_client: NepseApiClient = None):
        self.nepse_client = nepse_client or NepseApiClient()

    async def refresh_all_prices(
        self,
        db: AsyncSession,
        target_date: datetime.date,
    ) -> RefreshResult:
        """
        Fetch price data for all tracked stocks from the NEPSE API.
        For each stock, if a matching symbol is found in the response, upsert a
        PriceHistory row with source='api'. If not found or API fails, add to 'failed'.

        NEVER raises. All failures result in populated failed/error in the result.
        """
        succeeded: List[str] = []
        failed: List[str] = []
        api_error: str = None

        # 1. Load all tracked stocks
        stocks = await StockRepository.list_all(db)
        if not stocks:
            return RefreshResult(succeeded=[], failed=[], error="No stocks tracked yet.")

        # 2. Attempt to fetch all prices from NEPSE API once
        price_lookup: dict = {}  # symbol -> raw dict
        try:
            raw_data = await self.nepse_client.get_price_volume()
            for item in raw_data:
                sym = NepseApiClient.extract_symbol(item)
                if sym:
                    price_lookup[sym] = item
        except NepseApiError as e:
            api_error = str(e)
            # API call failed entirely — all stocks go to failed
            for stock in stocks:
                failed.append(stock.symbol)
            return RefreshResult(succeeded=succeeded, failed=failed, error=api_error)

        # 3. For each tracked stock, upsert or mark as failed
        for stock in stocks:
            symbol = stock.symbol.strip().upper()
            item = price_lookup.get(symbol)

            if item is None:
                failed.append(stock.symbol)
                continue

            ltp = NepseApiClient.extract_ltp(item)
            if ltp is None:
                failed.append(stock.symbol)
                continue

            open_price = NepseApiClient.extract_optional_price(item, "openPrice", "open")
            high_price = NepseApiClient.extract_optional_price(item, "highPrice", "high")
            low_price = NepseApiClient.extract_optional_price(item, "lowPrice", "low")
            volume = None
            for vkey in ("totalTradedQuantity", "tradedQuantity", "volume", "qty"):
                v = item.get(vkey)
                if v is not None:
                    try:
                        volume = int(float(v))
                        break
                    except (TypeError, ValueError):
                        continue

            try:
                schema = PriceHistoryCreate(
                    stock_id=stock.id,
                    date=target_date,
                    ltp=Decimal(str(ltp)),
                    open_price=Decimal(str(open_price)) if open_price is not None else None,
                    high_price=Decimal(str(high_price)) if high_price is not None else None,
                    low_price=Decimal(str(low_price)) if low_price is not None else None,
                    volume=volume,
                    source=PriceSource.API,
                )
                await PriceHistoryRepository.upsert(db, schema)
                succeeded.append(stock.symbol)
            except Exception as e:
                # Never crash — log symbol as failed
                failed.append(stock.symbol)

        return RefreshResult(succeeded=succeeded, failed=failed, error=api_error)





