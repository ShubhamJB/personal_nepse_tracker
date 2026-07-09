from typing import Optional
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.price_history import PriceHistory
from app.schemas.price_history import PriceHistoryCreate

class PriceHistoryRepository:
    @staticmethod
    async def create(db: AsyncSession, schema: PriceHistoryCreate) -> PriceHistory:
        db_price = PriceHistory(**schema.model_dump())
        db.add(db_price)
        await db.commit()
        await db.refresh(db_price)
        return db_price

    @staticmethod
    async def get_by_id(db: AsyncSession, id: int) -> Optional[PriceHistory]:
        result = await db.execute(select(PriceHistory).where(PriceHistory.id == id))
        return result.scalar_one_or_none()

    @staticmethod
    async def list_all(db: AsyncSession) -> list[PriceHistory]:
        result = await db.execute(select(PriceHistory))
        return list(result.scalars().all())

    @staticmethod
    async def get_latest_for_stock(db: AsyncSession, stock_id: int) -> Optional[PriceHistory]:
        result = await db.execute(
            select(PriceHistory)
            .where(PriceHistory.stock_id == stock_id)
            .order_by(PriceHistory.date.desc())
            .limit(1)
        )
        return result.scalar_one_or_none()

    @staticmethod
    async def get_previous_for_stock(db: AsyncSession, stock_id: int) -> Optional[PriceHistory]:
        """Returns the second-most-recent PriceHistory row for day_change_percent computation."""
        result = await db.execute(
            select(PriceHistory)
            .where(PriceHistory.stock_id == stock_id)
            .order_by(PriceHistory.date.desc())
            .offset(1)
            .limit(1)
        )
        return result.scalar_one_or_none()


    @staticmethod
    async def upsert(db: AsyncSession, schema: PriceHistoryCreate) -> PriceHistory:
        stmt = select(PriceHistory).where(
            PriceHistory.stock_id == schema.stock_id,
            PriceHistory.date == schema.date
        )
        result = await db.execute(stmt)
        db_price = result.scalar_one_or_none()
        
        if db_price:
            for key, value in schema.model_dump().items():
                setattr(db_price, key, value)
        else:
            db_price = PriceHistory(**schema.model_dump())
            db.add(db_price)
            
        await db.commit()
        await db.refresh(db_price)
        return db_price
