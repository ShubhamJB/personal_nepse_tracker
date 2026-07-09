import datetime
from decimal import Decimal
import enum
from typing import Optional
from sqlalchemy import ForeignKey, Numeric, Enum, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base

class PriceSource(str, enum.Enum):
    API = "api"
    MANUAL = "manual"

class PriceHistory(Base):
    __tablename__ = "price_histories"

    id: Mapped[int] = mapped_column(primary_key=True)
    stock_id: Mapped[int] = mapped_column(ForeignKey("stocks.id", ondelete="CASCADE"), nullable=False)
    date: Mapped[datetime.date] = mapped_column(nullable=False)
    ltp: Mapped[Decimal] = mapped_column(Numeric(10, 2), nullable=False)
    open_price: Mapped[Optional[Decimal]] = mapped_column(Numeric(10, 2), nullable=True)
    high_price: Mapped[Optional[Decimal]] = mapped_column(Numeric(10, 2), nullable=True)
    low_price: Mapped[Optional[Decimal]] = mapped_column(Numeric(10, 2), nullable=True)
    volume: Mapped[Optional[int]] = mapped_column(nullable=True)
    source: Mapped[PriceSource] = mapped_column(Enum(PriceSource, name="pricesource"), nullable=False)

    # Unique constraint: (stock_id, date)
    __table_args__ = (
        UniqueConstraint("stock_id", "date", name="uq_stock_date"),
    )

    # Relationship back to Stock
    stock = relationship("Stock", back_populates="price_histories")
