from datetime import date
from typing import Optional
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base

class Stock(Base):
    __tablename__ = "stocks"

    id: Mapped[int] = mapped_column(primary_key=True)
    symbol: Mapped[str] = mapped_column(unique=True, index=True, nullable=False)
    company_name: Mapped[str] = mapped_column(nullable=False)
    sector: Mapped[Optional[str]] = mapped_column(nullable=True)
    date_added: Mapped[date] = mapped_column(default=date.today, nullable=False)

    # Relationships
    holdings = relationship("Holding", back_populates="stock", cascade="all, delete-orphan")
    price_histories = relationship("PriceHistory", back_populates="stock", cascade="all, delete-orphan")
