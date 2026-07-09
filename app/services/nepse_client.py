"""
NEPSE API client using merolagani.com market_summary endpoint.

merolagani.com returns all traded stocks with the following compact JSON format:
  { "d": [ {"s":"NABIL","lp":920,"h":925,"l":915,"op":910,"q":12345,"pc":1.5}, ...] }

Fields:
  s  = symbol (ticker)
  lp = last traded price
  h  = high
  l  = low
  op = open price
  q  = traded quantity
  pc = percent change

This endpoint works during and after market hours (returns today's closing prices).
"""
import httpx
from typing import List, Optional

TIMEOUT_SECONDS = 15

MEROLAGANI_URL = "https://merolagani.com/handlers/webrequesthandler.ashx"
MEROLAGANI_HEADERS = {
    "Referer": "https://merolagani.com/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "application/json, text/plain, */*",
    "X-Requested-With": "XMLHttpRequest",
    "Origin": "https://merolagani.com",
}


class NepseApiError(Exception):
    """Raised when the NEPSE API call fails for any reason."""
    pass


class NepseApiClient:
    """
    Fetches NEPSE price data from merolagani.com market_summary endpoint.
    Falls back to the live_price endpoint if market_summary returns empty.
    """

    async def get_price_volume(self) -> List[dict]:
        """
        Fetch price/volume data for all NEPSE securities.
        Returns a list of normalized dicts with keys:
          securitySymbol, lastTradedPrice, openPrice, highPrice, lowPrice, totalTradedQuantity
        Raises NepseApiError if all sources fail.
        """
        errors = []

        async with httpx.AsyncClient(
            timeout=TIMEOUT_SECONDS,
            follow_redirects=True,
            headers=MEROLAGANI_HEADERS,
        ) as client:

            # Source 1: market_summary (works any time - shows today's data)
            try:
                resp = await client.get(
                    MEROLAGANI_URL,
                    params={"type": "market_summary"},
                )
                resp.raise_for_status()
                text = resp.text.strip()
                if text and len(text) > 10:
                    data = resp.json()
                    result = self._parse_market_summary(data)
                    if result:
                        return result
                    errors.append("market_summary: parsed 0 items")
                else:
                    errors.append("market_summary: empty response")
            except Exception as e:
                errors.append(f"market_summary: {e}")

            # Source 2: live_price (works during market hours only)
            try:
                resp = await client.get(
                    MEROLAGANI_URL,
                    params={"type": "live_price"},
                )
                resp.raise_for_status()
                text = resp.text.strip()
                if text and len(text) > 10:
                    data = resp.json()
                    result = self._parse_live_price(data)
                    if result:
                        return result
                    errors.append("live_price: parsed 0 items")
                else:
                    errors.append("live_price: empty (market closed)")
            except Exception as e:
                errors.append(f"live_price: {e}")

        raise NepseApiError(
            f"MeroLagani API failed. Errors: {'; '.join(errors)}"
        )

    def _parse_market_summary(self, raw) -> List[dict]:
        """
        Parse merolagani market_summary response.

        Actual response shape:
        {
          "mt": {...},
          "stock": {
            "date": "2026-07-02",
            "detail": [{"s":"NABIL","lp":920,"c":5,"q":1234}, ...]
          },
          "turnover": {...},
          ...
        }
        The stock list lives at raw['stock']['detail'].
        """
        items = []

        if isinstance(raw, dict):
            # Primary path: stock.detail
            stock_section = raw.get("stock")
            if isinstance(stock_section, dict):
                detail = stock_section.get("detail", [])
                if isinstance(detail, list):
                    items = detail

            # Fallback: top-level list keys
            if not items:
                for key in ("d", "data", "Result", "result", "stocks", "detail"):
                    val = raw.get(key)
                    if isinstance(val, list):
                        items = val
                        break

        elif isinstance(raw, list):
            # Nested list fallback: [[{d:[...]}, ...], ...]
            for group in raw:
                if isinstance(group, list):
                    for section in group:
                        if isinstance(section, dict) and "d" in section:
                            d = section["d"]
                            if isinstance(d, list):
                                items.extend(d)
                elif isinstance(group, dict):
                    for key in ("d", "detail", "data"):
                        val = group.get(key)
                        if isinstance(val, list):
                            items.extend(val)
                            break

        return self._normalize_merolagani_items(items)

    def _parse_live_price(self, raw) -> List[dict]:
        """
        Parse merolagani live_price response.
        Format: {"Result": [{"s":"NABIL","lp":920,...}, ...]}
        or direct list.
        """
        items = []
        if isinstance(raw, dict):
            for key in ("Result", "result", "d", "data"):
                val = raw.get(key)
                if isinstance(val, list):
                    items = val
                    break
        elif isinstance(raw, list):
            items = raw

        return self._normalize_merolagani_items(items)

    def _normalize_merolagani_items(self, items: list) -> List[dict]:
        """Convert merolagani compact items to our standard format."""
        result = []
        seen = set()

        for item in items:
            if not isinstance(item, dict):
                continue

            sym = (
                item.get("s") or item.get("symbol") or
                item.get("Symbol") or item.get("securitySymbol") or ""
            ).strip().upper()

            if not sym or sym in seen:
                continue
            seen.add(sym)

            ltp = item.get("lp") or item.get("lastTradedPrice") or item.get("close")
            if ltp is None:
                continue

            result.append({
                "securitySymbol": sym,
                "lastTradedPrice": ltp,
                "openPrice": item.get("op") or item.get("open") or item.get("openPrice"),
                "highPrice": item.get("h") or item.get("high") or item.get("highPrice"),
                "lowPrice": item.get("l") or item.get("low") or item.get("lowPrice"),
                "totalTradedQuantity": item.get("q") or item.get("qty") or item.get("volume"),
            })

        return result

    @staticmethod
    def extract_symbol(item: dict) -> str:
        """Extract and normalize the ticker symbol from a price item."""
        return (
            item.get("securitySymbol") or
            item.get("symbol") or
            ""
        ).strip().upper()

    @staticmethod
    def extract_ltp(item: dict):
        """
        Extract last traded price. Returns None if not found or not numeric.
        """
        for key in ("lastTradedPrice", "ltp", "closingPrice", "closePrice", "close"):
            val = item.get(key)
            if val is not None:
                try:
                    return float(val)
                except (TypeError, ValueError):
                    continue
        return None

    @staticmethod
    def extract_optional_price(item: dict, *keys: str):
        """Extract an optional numeric field, trying multiple key names."""
        for key in keys:
            val = item.get(key)
            if val is not None:
                try:
                    return float(val)
                except (TypeError, ValueError):
                    continue
        return None
