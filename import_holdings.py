import argparse
import asyncio
import csv
import datetime
import os
import sys
from decimal import Decimal

from app.core.database import SessionLocal
from app.models.stock import Stock
from app.models.holding import Holding
from app.repositories.stock_repository import StockRepository
from app.schemas.stock import StockCreate
from app.repositories.holding_repository import HoldingRepository
from app.schemas.holding import HoldingCreate


async def import_csv(csv_path: str):
    if not os.path.exists(csv_path):
        print(f"Error: File not found at '{csv_path}'")
        sys.exit(1)

    print(f"Opening CSV file: {csv_path}")
    
    rows_to_process = []
    
    with open(csv_path, mode="r", encoding="utf-8-sig") as f:
        # Using DictReader to handle headers easily
        reader = csv.DictReader(f)
        
        # Verify required headers
        headers = [h.strip().lower() for h in reader.fieldnames] if reader.fieldnames else []
        required = ["symbol", "quantity", "buy_price", "buy_date"]
        missing = [req for req in required if req not in headers]
        
        if missing:
            print(f"Error: CSV is missing required headers: {', '.join(missing)}")
            print(f"Available headers: {', '.join(reader.fieldnames or [])}")
            print("Expected headers format: symbol, quantity, buy_price, buy_date, [company_name], [sector], [notes]")
            sys.exit(1)

        # Normalize the field names to lower case
        for row in reader:
            normalized_row = {k.strip().lower(): v.strip() for k, v in row.items() if k}
            rows_to_process.append(normalized_row)

    print(f"Found {len(rows_to_process)} row(s) to process.")
    
    success_count = 0
    fail_count = 0

    async with SessionLocal() as db:
        for idx, row_data in enumerate(rows_to_process, start=1):
            symbol = row_data.get("symbol", "").upper()
            qty_str = row_data.get("quantity", "")
            price_str = row_data.get("buy_price", "")
            date_str = row_data.get("buy_date", "")
            notes = row_data.get("notes") or None
            
            # Optional stock creation info
            company_name = row_data.get("company_name") or f"{symbol} Limited"
            sector = row_data.get("sector") or None

            if not symbol or not qty_str or not price_str or not date_str:
                print(f"Row {idx}: Skipped due to missing values (symbol: {symbol}, qty: {qty_str}, price: {price_str}, date: {date_str})")
                fail_count += 1
                continue

            try:
                quantity = int(qty_str)
                buy_price = Decimal(price_str)
                buy_date = datetime.date.fromisoformat(date_str)
            except Exception as e:
                print(f"Row {idx} ({symbol}): Conversion error - {str(e)}")
                fail_count += 1
                continue

            try:
                # 1. Get or create stock
                stock = await StockRepository.get_by_symbol(db, symbol)
                if not stock:
                    print(f"Row {idx} ({symbol}): Stock not tracked. Creating stock record...")
                    stock_schema = StockCreate(
                        symbol=symbol,
                        company_name=company_name,
                        sector=sector
                    )
                    stock = await StockRepository.create(db, stock_schema)

                # 2. Create holding
                holding_schema = HoldingCreate(
                    stock_id=stock.id,
                    quantity=quantity,
                    buy_price=buy_price,
                    buy_date=buy_date,
                    notes=notes
                )
                await HoldingRepository.create(db, holding_schema)
                print(f"Row {idx} ({symbol}): Successfully imported {quantity} shares @ Rs {buy_price} on {buy_date}")
                success_count += 1

            except Exception as e:
                print(f"Row {idx} ({symbol}): Database error - {str(e)}")
                fail_count += 1
                # Rollback current transaction context if failed
                await db.rollback()

    print("\n" + "=" * 40)
    print("IMPORT SUMMARY")
    print("=" * 40)
    print(f"Successfully Imported: {success_count}")
    print(f"Failed/Skipped:        {fail_count}")
    print(f"Total processed:       {success_count + fail_count}")
    print("=" * 40)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Import holdings from a CSV file.")
    parser.add_argument("csv_file", help="Path to the CSV file to import")
    args = parser.parse_args()

    asyncio.run(import_csv(args.csv_file))
