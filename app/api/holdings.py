import csv
import datetime
import io
from decimal import Decimal
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload

from app.core.database import get_db
from app.repositories.holding_repository import HoldingRepository
from app.repositories.stock_repository import StockRepository
from app.schemas.holding import HoldingCreate, HoldingWithStock
from app.schemas.stock import StockCreate
from app.models.holding import Holding
from app.models.stock import Stock

router = APIRouter(prefix="/holdings", tags=["holdings"])


@router.post("", response_model=HoldingWithStock, status_code=status.HTTP_201_CREATED)
async def create_holding(schema: HoldingCreate, db: AsyncSession = Depends(get_db)):
    """Add a new holding."""
    holding = await HoldingRepository.create(db, schema)
    # Load the associated stock eagerly
    result = await db.execute(
        select(Holding)
        .options(selectinload(Holding.stock))
        .where(Holding.id == holding.id)
    )
    holding_with_stock = result.scalar_one()
    return HoldingWithStock(
        **{c.name: getattr(holding_with_stock, c.name) for c in Holding.__table__.columns},
        symbol=holding_with_stock.stock.symbol,
        company_name=holding_with_stock.stock.company_name,
    )


@router.get("", response_model=List[HoldingWithStock])
async def list_holdings(db: AsyncSession = Depends(get_db)):
    """
    List all holdings, each with its related stock symbol/name joined in.
    Uses selectinload to avoid N+1 queries.
    """
    result = await db.execute(
        select(Holding).options(selectinload(Holding.stock))
    )
    holdings = result.scalars().all()
    return [
        HoldingWithStock(
            **{c.name: getattr(h, c.name) for c in Holding.__table__.columns},
            symbol=h.stock.symbol,
            company_name=h.stock.company_name,
        )
        for h in holdings
    ]


@router.delete("/{holding_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_holding(holding_id: int, db: AsyncSession = Depends(get_db)):
    """Remove a holding (e.g. data-entry mistake)."""
    holding = await HoldingRepository.get_by_id(db, holding_id)
    if not holding:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Holding not found.")
    await db.delete(holding)
    await db.commit()


@router.post("/import-csv", response_model=dict)
async def import_csv_holdings(
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db)
):
    """
    Import holdings and stocks from an uploaded CSV file.
    """
    contents = await file.read()
    try:
        text = contents.decode("utf-8-sig")
    except Exception:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Failed to decode CSV file. Must be UTF-8 encoded."
        )

    f = io.StringIO(text)
    reader = csv.DictReader(f)

    if not reader.fieldnames:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="CSV file has no headers."
        )

    headers = [h.strip().lower() for h in reader.fieldnames if h]
    required = ["symbol", "quantity", "buy_price", "buy_date"]
    missing = [req for req in required if req not in headers]

    if missing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"CSV is missing required headers: {', '.join(missing)}"
        )

    success_count = 0
    fail_count = 0
    errors = []

    for idx, row in enumerate(reader, start=1):
        normalized_row = {k.strip().lower(): v.strip() for k, v in row.items() if k}
        
        symbol = normalized_row.get("symbol", "").upper()
        qty_str = normalized_row.get("quantity", "")
        price_str = normalized_row.get("buy_price", "")
        date_str = normalized_row.get("buy_date", "")
        notes = normalized_row.get("notes") or None
        
        company_name = normalized_row.get("company_name") or f"{symbol} Limited"
        sector = normalized_row.get("sector") or None

        if not symbol or not qty_str or not price_str or not date_str:
            fail_count += 1
            errors.append(f"Row {idx}: Missing required fields.")
            continue

        try:
            quantity = int(qty_str)
            buy_price = Decimal(price_str)
            buy_date = datetime.date.fromisoformat(date_str)
        except Exception as e:
            fail_count += 1
            errors.append(f"Row {idx} ({symbol}): Conversion error - {str(e)}.")
            continue

        try:
            # Get or create stock
            stock = await StockRepository.get_by_symbol(db, symbol)
            if not stock:
                stock_schema = StockCreate(
                    symbol=symbol,
                    company_name=company_name,
                    sector=sector
                )
                stock = await StockRepository.create(db, stock_schema)

            # Create holding
            holding_schema = HoldingCreate(
                stock_id=stock.id,
                quantity=quantity,
                buy_price=buy_price,
                buy_date=buy_date,
                notes=notes
            )
            await HoldingRepository.create(db, holding_schema)
            success_count += 1
        except Exception as e:
            fail_count += 1
            errors.append(f"Row {idx} ({symbol}): Database error - {str(e)}.")
            await db.rollback()

    return {
        "status": "ok",
        "imported": success_count,
        "failed": fail_count,
        "errors": errors
    }
