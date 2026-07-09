from typing import List, Optional
from pydantic import BaseModel


class StockPnL(BaseModel):
    """Per-stock P&L breakdown."""

    stock_id: int
    symbol: str
    company_name: str

    # Position sizing
    quantity: int
    avg_buy_price: float
    total_invested: float

    # Current valuation — all None if no PriceHistory row exists yet
    latest_ltp: Optional[float] = None
    current_value: Optional[float] = None
    unrealized_pnl_amount: Optional[float] = None
    unrealized_pnl_percent: Optional[float] = None

    # Day-over-day change — None if fewer than two PriceHistory rows exist
    day_change_percent: Optional[float] = None

    # Price metadata
    price_date: Optional[str] = None      # ISO date string of the latest price used
    price_source: Optional[str] = None    # "api" | "manual" | None

    # True if no price exists OR latest price date is not today
    needs_price_update: bool


class PortfolioSummary(BaseModel):
    """Portfolio-level rollup across all tracked stocks with holdings."""

    # Totals — current_value/pnl only include stocks that have a price
    total_invested: float
    total_current_value: float
    total_unrealized_pnl_amount: float
    total_unrealized_pnl_percent: Optional[float] = None  # None if total_invested == 0

    # How many stocks were excluded from totals due to missing price
    stocks_missing_price: int

    # Full per-stock list (includes missing-price stocks with needs_price_update=True)
    stock_breakdown: List[StockPnL]

    # ISO datetime string of when this snapshot was calculated
    as_of: str
