from datetime import date
from typing import Optional
from pydantic import BaseModel, ConfigDict

class StockBase(BaseModel):
    symbol: str
    company_name: str
    sector: Optional[str] = None

class StockCreate(StockBase):
    pass

class Stock(StockBase):
    id: int
    date_added: date

    model_config = ConfigDict(from_attributes=True)
