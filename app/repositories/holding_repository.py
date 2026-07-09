from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.holding import Holding
from app.schemas.holding import HoldingCreate

class HoldingRepository:
    @staticmethod
    async def create(db: AsyncSession, schema: HoldingCreate) -> Holding:
        db_holding = Holding(**schema.model_dump())
        db.add(db_holding)
        await db.commit()
        await db.refresh(db_holding)
        return db_holding

    @staticmethod
    async def get_by_id(db: AsyncSession, id: int) -> Optional[Holding]:
        result = await db.execute(select(Holding).where(Holding.id == id))
        return result.scalar_one_or_none()

    @staticmethod
    async def list_all(db: AsyncSession) -> list[Holding]:
        result = await db.execute(select(Holding))
        return list(result.scalars().all())

    @staticmethod
    async def list_by_stock(db: AsyncSession, stock_id: int) -> list[Holding]:
        result = await db.execute(select(Holding).where(Holding.stock_id == stock_id))
        return list(result.scalars().all())
