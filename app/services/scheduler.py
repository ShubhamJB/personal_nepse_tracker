import asyncio
import datetime
import logging
from app.core.config import settings
from app.core.database import SessionLocal
from app.services.price_service import PriceService

logger = logging.getLogger("nepse.scheduler")

async def auto_refresh_prices_loop():
    """
    Infinite loop to periodically fetch live stock prices in the background.
    """
    if not settings.AUTO_REFRESH_ENABLED:
        msg = "Automatic price refresh scheduler is disabled."
        print(f"[{datetime.datetime.now()}] [Scheduler] {msg}")
        logger.info(msg)
        return

    msg = f"Starting automatic price refresh scheduler (Interval: {settings.AUTO_REFRESH_INTERVAL} seconds)."
    print(f"[{datetime.datetime.now()}] [Scheduler] {msg}")
    logger.info(msg)

    # Initial delay on startup to allow application bootstrap
    await asyncio.sleep(5)

    while True:
        try:
            async with SessionLocal() as db:
                target_date = datetime.date.today()
                print(f"[{datetime.datetime.now()}] [Scheduler] Triggering automatic stock price refresh...")
                logger.info("Auto-refreshing stock prices...")
                
                # Instantiate price service and run refresh
                service = PriceService()
                result = await service.refresh_all_prices(db, target_date)
                
                summary = (
                    f"Auto-refresh complete. Succeeded: {len(result.succeeded)} stock(s), "
                    f"Failed: {len(result.failed)} stock(s), Error: {result.error}"
                )
                print(f"[{datetime.datetime.now()}] [Scheduler] {summary}")
                logger.info(summary)
        except Exception as e:
            err_msg = f"Error in automatic price refresh task: {e}"
            print(f"[{datetime.datetime.now()}] [Scheduler] [ERROR] {err_msg}")
            logger.error(err_msg, exc_info=True)

        # Sleep for configured interval
        await asyncio.sleep(settings.AUTO_REFRESH_INTERVAL)
