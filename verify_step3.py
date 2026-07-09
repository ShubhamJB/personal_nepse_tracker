"""
Step 3 Verification Script — Portfolio / P&L Service
Mirrors the style of the Step 1 and Step 2 verification scripts.

Run from the project root:
    python verify_step3.py
"""

import asyncio
import datetime
import sys
from decimal import Decimal

from app.core.database import SessionLocal
from app.models.stock import Stock
from app.models.holding import Holding
from app.models.price_history import PriceHistory, PriceSource
from app.services.portfolio_service import PortfolioService

SEP = "=" * 64
PASS = True


def _check(condition: bool, label: str) -> bool:
    global PASS
    status = "  [OK]  " if condition else "  [FAIL]"
    print(f"{status} {label}")
    if not condition:
        PASS = False
    return condition


async def main():
    print(SEP)
    print("STEP 3 VERIFICATION — Portfolio / P&L Service")
    print(SEP)
    today = datetime.date.today()
    yesterday = today - datetime.timedelta(days=1)

    # ------------------------------------------------------------------ #
    # Collect IDs for cleanup at the end                                   #
    # ------------------------------------------------------------------ #
    stock_ids = []
    holding_ids = []
    price_ids = []

    async with SessionLocal() as db:
        try:
            # ---------------------------------------------------------- #
            # 1. Create test stocks                                        #
            # ---------------------------------------------------------- #
            print("\n1. Creating test stocks (NABIL, NTC, UPPER)...")
            nabil = Stock(symbol="NABIL", company_name="Nabil Bank Limited", sector="Banking")
            ntc   = Stock(symbol="NTC",   company_name="Nepal Telecom",        sector="Telecom")
            upper = Stock(symbol="UPPER", company_name="Upper Tamakoshi Hydro", sector="Hydro")
            db.add_all([nabil, ntc, upper])
            await db.commit()
            await db.refresh(nabil)
            await db.refresh(ntc)
            await db.refresh(upper)
            stock_ids = [nabil.id, ntc.id, upper.id]
            print(f"   Created NABIL (id={nabil.id}), NTC (id={ntc.id}), UPPER (id={upper.id})")

            # ---------------------------------------------------------- #
            # 2. Add holdings                                              #
            # ---------------------------------------------------------- #
            print("\n2. Adding holdings...")

            # NABIL: single lot — 100 shares @ 1050
            h_nabil = Holding(
                stock_id=nabil.id, quantity=100,
                buy_price=Decimal("1050.00"), buy_date=today
            )
            # NTC: two lots — 50 @ 800 + 50 @ 900 => weighted avg = 850.00
            h_ntc_1 = Holding(
                stock_id=ntc.id, quantity=50,
                buy_price=Decimal("800.00"), buy_date=yesterday
            )
            h_ntc_2 = Holding(
                stock_id=ntc.id, quantity=50,
                buy_price=Decimal("900.00"), buy_date=today
            )
            # UPPER: one lot — 200 @ 280 (deliberately NO price history)
            h_upper = Holding(
                stock_id=upper.id, quantity=200,
                buy_price=Decimal("280.00"), buy_date=today
            )
            db.add_all([h_nabil, h_ntc_1, h_ntc_2, h_upper])
            await db.commit()
            for h in [h_nabil, h_ntc_1, h_ntc_2, h_upper]:
                await db.refresh(h)
            holding_ids = [h_nabil.id, h_ntc_1.id, h_ntc_2.id, h_upper.id]
            print(f"   NABIL:  1 lot  (100 × 1050.00)")
            print(f"   NTC:    2 lots (50 × 800.00 + 50 × 900.00)  → expected avg = 850.00")
            print(f"   UPPER:  1 lot  (200 × 280.00)  — NO price history will be added")

            # ---------------------------------------------------------- #
            # 3. Add price history                                         #
            # ---------------------------------------------------------- #
            print("\n3. Adding price history...")

            # NABIL: only today's row (→ day_change_percent should be None)
            p_nabil = PriceHistory(
                stock_id=nabil.id, date=today,
                ltp=Decimal("1100.00"), source=PriceSource.MANUAL
            )
            # NTC: yesterday + today (→ day_change_percent should be computed)
            p_ntc_yesterday = PriceHistory(
                stock_id=ntc.id, date=yesterday,
                ltp=Decimal("840.00"), source=PriceSource.MANUAL
            )
            p_ntc_today = PriceHistory(
                stock_id=ntc.id, date=today,
                ltp=Decimal("860.00"), source=PriceSource.MANUAL
            )
            # UPPER: deliberately NO price row
            db.add_all([p_nabil, p_ntc_yesterday, p_ntc_today])
            await db.commit()
            for p in [p_nabil, p_ntc_yesterday, p_ntc_today]:
                await db.refresh(p)
            price_ids = [p_nabil.id, p_ntc_yesterday.id, p_ntc_today.id]
            print(f"   NABIL: 1 row  (today, LTP=1100.00)")
            print(f"   NTC:   2 rows (yesterday=840.00, today=860.00)")
            print(f"   UPPER: 0 rows")

            # ---------------------------------------------------------- #
            # 4. Call PortfolioService                                     #
            # ---------------------------------------------------------- #
            print("\n4. Calling PortfolioService.get_portfolio_summary()...")
            service = PortfolioService()
            summary = await service.get_portfolio_summary(db)

            # ---------------------------------------------------------- #
            # 5. Print + assert                                            #
            # ---------------------------------------------------------- #
            print("\n5. Results\n")
            print(f"   Portfolio as_of : {summary.as_of}")
            print(f"   Total invested  : {summary.total_invested:>12,.2f}")
            print(f"   Total value     : {summary.total_current_value:>12,.2f}")
            print(f"   Unrealized P&L  : {summary.total_unrealized_pnl_amount:>12,.2f}  "
                  f"({summary.total_unrealized_pnl_percent}%)")
            print(f"   Missing price   : {summary.stocks_missing_price} stock(s)")
            print()

            col = f"{'Symbol':<8} {'Qty':>5} {'AvgBuy':>9} {'LTP':>9} "  \
                  f"{'P&L':>10} {'P&L%':>7} {'Day%':>7} {'NeedsUpd':>9} {'Src':<7}"
            print("   " + col)
            print("   " + "-" * len(col))
            for s in summary.stock_breakdown:
                print(
                    f"   {s.symbol:<8} {s.quantity:>5} {s.avg_buy_price:>9.2f} "
                    f"{str(s.latest_ltp or 'N/A'):>9} "
                    f"{str(s.unrealized_pnl_amount or 'N/A'):>10} "
                    f"{str(s.unrealized_pnl_percent or 'N/A'):>7} "
                    f"{str(s.day_change_percent or 'N/A'):>7} "
                    f"{str(s.needs_price_update):>9} "
                    f"{str(s.price_source or 'N/A'):<7}"
                )

            print("\n6. Assertions\n")

            # Find per-symbol breakdowns
            by_sym = {s.symbol: s for s in summary.stock_breakdown}

            # Weighted average for NTC
            _check(
                by_sym["NTC"].avg_buy_price == 850.00,
                f"NTC weighted avg_buy_price == 850.00  (got {by_sym['NTC'].avg_buy_price})"
            )

            # UPPER has needs_price_update=True
            _check(
                by_sym["UPPER"].needs_price_update is True,
                f"UPPER.needs_price_update is True"
            )

            # UPPER latest_ltp is None
            _check(
                by_sym["UPPER"].latest_ltp is None,
                f"UPPER.latest_ltp is None"
            )

            # UPPER is in breakdown but excluded from totals
            _check(
                summary.stocks_missing_price == 1,
                f"stocks_missing_price == 1  (got {summary.stocks_missing_price})"
            )

            # NABIL day_change_percent is None (only one price row)
            _check(
                by_sym["NABIL"].day_change_percent is None,
                f"NABIL.day_change_percent is None  (got {by_sym['NABIL'].day_change_percent})"
            )

            # NTC day_change_percent is computed: (860-840)/840*100 ≈ 2.38
            expected_ntc_day_pct = round((860 - 840) / 840 * 100, 2)
            _check(
                by_sym["NTC"].day_change_percent == expected_ntc_day_pct,
                f"NTC.day_change_percent == {expected_ntc_day_pct}  (got {by_sym['NTC'].day_change_percent})"
            )

            # Total invested = NABIL(100×1050) + NTC(100×850) + UPPER(200×280)
            # Spec: total_invested is across ALL stocks with holdings (incl. no-price ones)
            expected_invested = round(100 * 1050.0 + 100 * 850.0 + 200 * 280.0, 2)
            _check(
                summary.total_invested == expected_invested,
                f"total_invested == {expected_invested}  (got {summary.total_invested})"
            )

            # Total current value = NABIL(100×1100) + NTC(100×860) only
            expected_value = round(100 * 1100.0 + 100 * 860.0, 2)
            _check(
                summary.total_current_value == expected_value,
                f"total_current_value == {expected_value}  (got {summary.total_current_value})"
            )

        finally:
            # ---------------------------------------------------------- #
            # Cleanup                                                      #
            # ---------------------------------------------------------- #
            print("\n7. Cleaning up test data...")
            for pid in price_ids:
                obj = await db.get(PriceHistory, pid)
                if obj:
                    await db.delete(obj)
            for hid in holding_ids:
                obj = await db.get(Holding, hid)
                if obj:
                    await db.delete(obj)
            for sid in stock_ids:
                obj = await db.get(Stock, sid)
                if obj:
                    await db.delete(obj)
            await db.commit()
            print("   Cleanup done.")

    print()
    print(SEP)
    if PASS:
        print("✓ Step 3 verification PASSED.")
    else:
        print("✗ Step 3 verification FAILED. See [FAIL] items above.")
    print(SEP)
    sys.exit(0 if PASS else 1)


if __name__ == "__main__":
    asyncio.run(main())
