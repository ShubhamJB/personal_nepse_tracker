from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.database import get_db
from app.repositories.stock_repository import StockRepository
from app.schemas.stock import StockCreate, Stock

router = APIRouter(prefix="/stocks", tags=["stocks"])


@router.post("", response_model=Stock, status_code=status.HTTP_201_CREATED)
async def create_stock(schema: StockCreate, db: AsyncSession = Depends(get_db)):
    """Add a new stock to track."""
    existing = await StockRepository.get_by_symbol(db, schema.symbol)
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Stock with symbol '{schema.symbol}' already exists.",
        )
    return await StockRepository.create(db, schema)


@router.get("", response_model=List[Stock])
async def list_stocks(db: AsyncSession = Depends(get_db)):
    """List all tracked stocks."""
    return await StockRepository.list_all(db)


@router.get("/{stock_id}", response_model=Stock)
async def get_stock(stock_id: int, db: AsyncSession = Depends(get_db)):
    """Get a single stock by ID."""
    stock = await StockRepository.get_by_id(db, stock_id)
    if not stock:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Stock not found.")
    return stock
