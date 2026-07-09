# NEPSE Portfolio Tracker

A personal stock portfolio tracker for the Nepal Stock Exchange (NEPSE). Track holdings, unrealized P&L, and price history through a FastAPI backend and a Windows 95–style web UI.

## Prerequisites

- **Python 3.9+** (3.11+ recommended)
- **PostgreSQL** (local install, Docker, or a hosted instance)
- A modern web browser

## Project structure

```
personal-nepse/
├── app/                  # FastAPI backend (API, services, database models)
├── alembic/              # Database migrations
├── frontend/             # Static web UI (HTML, CSS, JS)
├── import_holdings.py    # CLI tool for bulk CSV import
├── sample_holdings.csv   # Example CSV for testing imports
├── requirements.txt
└── .env.example          # Environment variable template
```

## 1. Clone and enter the project

```bash
cd personal-nepse
```

## 2. Set up PostgreSQL

Create a database for the app:

```bash
createdb nepse_tracker
```

Or, using `psql`:

```sql
CREATE DATABASE nepse_tracker;
```

## 3. Configure environment variables

Copy the example env file and edit it if your database credentials differ:

```bash
cp .env.example .env
```

Default connection string in `.env.example`:

```
DATABASE_URL=postgresql+asyncpg://postgres:postgres@localhost:5432/nepse_tracker
```

Update `DATABASE_URL` to match your PostgreSQL username, password, host, and database name.

## 4. Set up the Python backend

Create and activate a virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate        # macOS / Linux
# .venv\Scripts\activate         # Windows
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run database migrations:

```bash
alembic upgrade head
```

Start the API server:

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The backend will be available at [http://localhost:8000](http://localhost:8000).

- Health check: [http://localhost:8000/health](http://localhost:8000/health)
- Interactive API docs: [http://localhost:8000/docs](http://localhost:8000/docs)

Leave this terminal running.

## 5. Run the frontend

Open a **second terminal**, activate the same virtual environment (optional for serving static files), and start a simple HTTP server from the `frontend` folder:

```bash
cd frontend
python3 -m http.server 5500
```

Open the app in your browser:

[http://localhost:5500](http://localhost:5500)

The frontend expects the API at `http://localhost:8000` (configured in `frontend/app.js`).

## 6. Load some data (optional)

### Import holdings from CSV (web UI)

1. Open the app in your browser.
2. Click **Import CSV** in the toolbar.
3. Upload a CSV file with headers: `symbol`, `quantity`, `buy_price`, `buy_date`.
   Optional columns: `company_name`, `sector`, `notes`.
4. A sample file is included: `sample_holdings.csv`.

### Import holdings from CSV (CLI)

With the virtual environment active and the database running:

```bash
python import_holdings.py sample_holdings.csv
```

### Add holdings manually

Use the **+ Add Holding** button in the UI, or call the API directly via [http://localhost:8000/docs](http://localhost:8000/docs).

## 7. Refresh stock prices

In the web UI, click **Refresh Prices** to fetch the latest NEPSE prices from merolagani.com.

If some symbols fail to update automatically, the app will prompt you to enter prices manually.

## Quick start (all steps)

```bash
# Terminal 1 — backend
cd personal-nepse
cp .env.example .env          # edit if needed
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
createdb nepse_tracker        # skip if DB already exists
alembic upgrade head
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Terminal 2 — frontend
cd personal-nepse/frontend
python3 -m http.server 5500
```

Then open [http://localhost:5500](http://localhost:5500).

## API overview

| Endpoint | Method | Description |
|---|---|---|
| `/health` | GET | Health check |
| `/stocks` | GET, POST | List or add tracked stocks |
| `/holdings` | GET, POST | List or add holding lots |
| `/holdings/{id}` | DELETE | Remove a holding lot |
| `/holdings/import-csv` | POST | Bulk import from CSV |
| `/prices/refresh` | POST | Fetch latest prices from NEPSE |
| `/prices/manual` | POST | Manually set a stock price |
| `/portfolio/summary` | GET | Portfolio totals and per-stock P&L |

## Troubleshooting

**Database connection errors**
- Confirm PostgreSQL is running.
- Verify `DATABASE_URL` in `.env` matches your setup.
- Ensure the `nepse_tracker` database exists.

**Frontend shows "Loading…" or API errors**
- Make sure the backend is running on port `8000`.
- Serve the frontend over HTTP (`python3 -m http.server`) — do not open `index.html` directly as a `file://` URL.

**Price refresh failures**
- The app fetches live data from merolagani.com; network issues or API downtime can cause partial failures.
- Use manual price entry for symbols that could not be updated automatically.

**Migrations out of date**
```bash
alembic upgrade head
```

## Development notes

- Backend: FastAPI + SQLAlchemy (async) + PostgreSQL
- Migrations: Alembic
- Frontend: vanilla HTML/CSS/JS (no build step required)
- Price source: merolagani.com market summary API
