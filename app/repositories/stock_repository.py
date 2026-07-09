from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.stock import Stock
from app.schemas.stock import StockCreate

class StockRepository:
    @staticmethod
    async def create(db: AsyncSession, schema: StockCreate) -> Stock:
        db_stock = Stock(**schema.model_dump())
        db.add(db_stock)
        await db.commit()
        await db.refresh(db_stock)
        return db_stock

    @staticmethod
    async def get_by_id(db: AsyncSession, id: int) -> Optional[Stock]:
        result = await db.execute(select(Stock).where(Stock.id == id))
        return result.scalar_one_or_none()

    @staticmethod
    async def list_all(db: AsyncSession) -> list[Stock]:
        result = await db.execute(select(Stock))
        return list(result.scalars().all())

    @staticmethod
    async def get_by_symbol(db: AsyncSession, symbol: str) -> Optional[Stock]:
        result = await db.execute(select(Stock).where(Stock.symbol == symbol))
        return result.scalar_one_or_none()
