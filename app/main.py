import asyncio
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import stocks, holdings, prices, portfolio
from app.services.scheduler import auto_refresh_prices_loop

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Start background scheduler
    task = asyncio.create_task(auto_refresh_prices_loop())
    yield
    # Cancel background task on shutdown
    task.cancel()
    try:
        await task
    except asyncio.CancelledError:
        pass

app = FastAPI(
    title="NEPSE Portfolio Tracker",
    description="Personal NEPSE portfolio tracker — stock holdings & price history.",
    version="0.2.0",
    lifespan=lifespan,
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all API routers
app.include_router(stocks.router)
app.include_router(holdings.router)
app.include_router(prices.router)
app.include_router(portfolio.router)


@app.get("/health", tags=["meta"])
def health_check():
    return {"status": "ok"}
