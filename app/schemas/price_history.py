from datetime import date
from decimal import Decimal
from typing import Optional
from pydantic import BaseModel, ConfigDict
from app.models.price_history import PriceSource

class PriceHistoryBase(BaseModel):
    stock_id: int
    date: date
    ltp: Decimal
    open_price: Optional[Decimal] = None
    high_price: Optional[Decimal] = None
    low_price: Optional[Decimal] = None
    volume: Optional[int] = None
    source: PriceSource

class PriceHistoryCreate(PriceHistoryBase):
    pass

class PriceHistory(PriceHistoryBase):
    id: int

    model_config = ConfigDict(from_attributes=True)
