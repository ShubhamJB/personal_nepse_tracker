from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.schemas.portfolio import PortfolioSummary
from app.services.portfolio_service import PortfolioService

router = APIRouter(prefix="/portfolio", tags=["portfolio"])


@router.get("/summary", response_model=PortfolioSummary)
async def get_portfolio_summary(db: AsyncSession = Depends(get_db)):
    """
    Returns a full portfolio snapshot:
    - Per-stock P&L (weighted avg buy price, unrealized gain/loss, day change %)
    - Portfolio-level totals (excluding stocks with no price history yet)
    - Flags stocks that need a price update today

    Never raises a 500 for missing price data — those stocks appear in
    `stock_breakdown` with `needs_price_update=True` and null price fields,
    and are excluded from the totals.
    """
    service = PortfolioService()
    return await service.get_portfolio_summary(db)
