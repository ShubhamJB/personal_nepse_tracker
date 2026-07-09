from datetime import date
from decimal import Decimal
from typing import Optional
from pydantic import BaseModel, ConfigDict

class HoldingBase(BaseModel):
    stock_id: int
    quantity: int
    buy_price: Decimal
    buy_date: date
    notes: Optional[str] = None

class HoldingCreate(HoldingBase):
    pass

class Holding(HoldingBase):
    id: int

    model_config = ConfigDict(from_attributes=True)

class HoldingWithStock(Holding):
    """Holding with stock symbol and name joined in."""
    symbol: str
    company_name: str
