import datetime
from decimal import Decimal
from typing import List, Optional

from sqlalchemy.ext.asyncio import AsyncSession

from app.repositories.stock_repository import StockRepository
from app.repositories.holding_repository import HoldingRepository
from app.repositories.price_history_repository import PriceHistoryRepository
from app.schemas.portfolio import StockPnL, PortfolioSummary


class PortfolioService:
    """
    Computes portfolio valuation and unrealized P&L snapshots.

    All DB access goes through existing repositories — no raw queries here.
    """

    async def get_portfolio_summary(self, db: AsyncSession) -> PortfolioSummary:
        stocks = await StockRepository.list_all(db)
        today = datetime.date.today()

        stock_breakdown: List[StockPnL] = []

        # Portfolio-level accumulators
        total_invested: float = 0.0
        total_current_value: float = 0.0
        total_unrealized_pnl_amount: float = 0.0
        stocks_missing_price: int = 0

        for stock in stocks:
            holdings = await HoldingRepository.list_by_stock(db, stock.id)

            # Skip stocks that have no holdings at all — not tracked
            if not holdings:
                continue

            # --- Aggregate position across all lots ---
            total_qty: int = sum(h.quantity for h in holdings)

            # Guard: should never be zero, but be defensive
            if total_qty == 0:
                continue

            weighted_sum: Decimal = sum(
                Decimal(str(h.quantity)) * h.buy_price for h in holdings
            )
            avg_buy_price: float = float(weighted_sum / Decimal(str(total_qty)))
            total_invested_stock: float = total_qty * avg_buy_price
            total_invested += total_invested_stock

            # --- Fetch latest price ---
            latest = await PriceHistoryRepository.get_latest_for_stock(db, stock.id)

            if latest is None:
                # No price yet — populate nulls, flag for update
                pnl = StockPnL(
                    stock_id=stock.id,
                    symbol=stock.symbol,
                    company_name=stock.company_name,
                    quantity=total_qty,
                    avg_buy_price=round(avg_buy_price, 2),
                    total_invested=round(total_invested_stock, 2),
                    latest_ltp=None,
                    current_value=None,
                    unrealized_pnl_amount=None,
                    unrealized_pnl_percent=None,
                    day_change_percent=None,
                    price_date=None,
                    price_source=None,
                    needs_price_update=True,
                )
                stocks_missing_price += 1
                stock_breakdown.append(pnl)
                continue

            # --- Price exists: compute valuation ---
            ltp = float(latest.ltp)
            current_value = total_qty * ltp
            pnl_amount = current_value - total_invested_stock
            pnl_pct = (pnl_amount / total_invested_stock * 100) if total_invested_stock != 0 else None
            needs_update = latest.date != today

            # --- Day change: compare latest vs previous row ---
            day_change_pct: Optional[float] = None
            previous = await PriceHistoryRepository.get_previous_for_stock(db, stock.id)
            if previous is not None and float(previous.ltp) != 0:
                day_change_pct = round(
                    (float(latest.ltp) - float(previous.ltp)) / float(previous.ltp) * 100, 2
                )

            pnl = StockPnL(
                stock_id=stock.id,
                symbol=stock.symbol,
                company_name=stock.company_name,
                quantity=total_qty,
                avg_buy_price=round(avg_buy_price, 2),
                total_invested=round(total_invested_stock, 2),
                latest_ltp=round(ltp, 2),
                current_value=round(current_value, 2),
                unrealized_pnl_amount=round(pnl_amount, 2),
                unrealized_pnl_percent=round(pnl_pct, 2) if pnl_pct is not None else None,
                day_change_percent=day_change_pct,
                price_date=str(latest.date),
                price_source=latest.source.value,
                needs_price_update=needs_update,
            )

            # Accumulate into portfolio totals
            total_current_value += current_value
            total_unrealized_pnl_amount += pnl_amount
            stock_breakdown.append(pnl)

        # --- Portfolio-level rollup ---
        total_pnl_pct: Optional[float] = None
        if total_invested > 0:
            total_pnl_pct = round(
                total_unrealized_pnl_amount / total_invested * 100, 2
            )

        return PortfolioSummary(
            total_invested=round(total_invested, 2),
            total_current_value=round(total_current_value, 2),
            total_unrealized_pnl_amount=round(total_unrealized_pnl_amount, 2),
            total_unrealized_pnl_percent=total_pnl_pct,
            stocks_missing_price=stocks_missing_price,
            stock_breakdown=stock_breakdown,
            as_of=datetime.datetime.utcnow().isoformat(),
        )
