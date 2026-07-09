from typing import Optional, List
from pydantic import BaseModel

class RefreshResult(BaseModel):
    succeeded: List[str]
    failed: List[str]
    error: Optional[str] = None

class ManualPriceEntryRequest(BaseModel):
    stock_id: int
    date: str  # YYYY-MM-DD
    ltp: float
    open_price: Optional[float] = None
    high_price: Optional[float] = None
    low_price: Optional[float] = None
    volume: Optional[int] = None

class PriceRefreshRequest(BaseModel):
    date: Optional[str] = None  # YYYY-MM-DD, defaults to today if omitted

class LatestPriceItem(BaseModel):
    stock_id: int
    symbol: str
    company_name: str
    date: Optional[str] = None
    ltp: Optional[float] = None
    open_price: Optional[float] = None
    high_price: Optional[float] = None
    low_price: Optional[float] = None
    volume: Optional[int] = None
    source: Optional[str] = None
