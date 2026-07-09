import datetime
from decimal import Decimal
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload

from app.core.database import get_db
from app.repositories.stock_repository import StockRepository
from app.repositories.price_history_repository import PriceHistoryRepository
from app.schemas.price_history import PriceHistoryCreate
from app.schemas.price_service import (
    RefreshResult,
    ManualPriceEntryRequest,
    PriceRefreshRequest,
    LatestPriceItem,
)
from app.models.price_history import PriceHistory, PriceSource
from app.models.stock import Stock
from app.services.price_service import PriceService

router = APIRouter(prefix="/prices", tags=["prices"])


@router.post("/refresh", response_model=RefreshResult)
async def refresh_prices(
    body: PriceRefreshRequest = None,
    db: AsyncSession = Depends(get_db),
):
    """
    Trigger a price refresh from the NEPSE API for all tracked stocks.
    Body: {"date": "YYYY-MM-DD"} — omit or pass null to default to today.
    Returns RefreshResult with succeeded/failed symbol lists.
    Never returns a 500 for API failures — those go into 'failed'.
    """
    if body and body.date:
        try:
            target_date = datetime.date.fromisoformat(body.date)
        except ValueError:
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail=f"Invalid date format: '{body.date}'. Use YYYY-MM-DD.",
            )
    else:
        target_date = datetime.date.today()

    service = PriceService()
    return await service.refresh_all_prices(db, target_date)


@router.post("/manual", response_model=dict)
async def manual_price_entry(
    body: ManualPriceEntryRequest,
    db: AsyncSession = Depends(get_db),
):
    """
    Manually enter or override a price for a stock on a specific date.
    Upserts via PriceHistoryRepository with source='manual'.
    Use this for symbols in the 'failed' list from a refresh.
    """
    try:
        target_date = datetime.date.fromisoformat(body.date)
    except ValueError:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail=f"Invalid date format: '{body.date}'. Use YYYY-MM-DD.",
        )

    stock = await StockRepository.get_by_id(db, body.stock_id)
    if not stock:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Stock with id {body.stock_id} not found.",
        )

    schema = PriceHistoryCreate(
        stock_id=body.stock_id,
        date=target_date,
        ltp=Decimal(str(body.ltp)),
        open_price=Decimal(str(body.open_price)) if body.open_price is not None else None,
        high_price=Decimal(str(body.high_price)) if body.high_price is not None else None,
        low_price=Decimal(str(body.low_price)) if body.low_price is not None else None,
        volume=body.volume,
        source=PriceSource.MANUAL,
    )
    price = await PriceHistoryRepository.upsert(db, schema)
    return {
        "status": "ok",
        "stock_id": stock.id,
        "symbol": stock.symbol,
        "date": str(price.date),
        "ltp": float(price.ltp),
        "source": price.source.value,
    }


@router.get("/latest", response_model=List[LatestPriceItem])
async def get_latest_prices(db: AsyncSession = Depends(get_db)):
    """
    Returns the latest PriceHistory row per tracked stock, joined with stock info.
    Powers the 'needs update today?' check on the frontend.
    """
    stocks = await StockRepository.list_all(db)
    results = []
    for stock in stocks:
        latest = await PriceHistoryRepository.get_latest_for_stock(db, stock.id)
        item = LatestPriceItem(
            stock_id=stock.id,
            symbol=stock.symbol,
            company_name=stock.company_name,
        )
        if latest:
            item.date = str(latest.date)
            item.ltp = float(latest.ltp)
            item.open_price = float(latest.open_price) if latest.open_price else None
            item.high_price = float(latest.high_price) if latest.high_price else None
            item.low_price = float(latest.low_price) if latest.low_price else None
            item.volume = latest.volume
            item.source = latest.source.value
        results.append(item)
    return results
