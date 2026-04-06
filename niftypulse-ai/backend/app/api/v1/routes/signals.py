from fastapi import APIRouter, HTTPException, Query
from datetime import datetime, timezone

router = APIRouter()

# Example: Replace with real Nifty 200 source or service
NIFTY_200_SYMBOLS = {
    "RELIANCE",
    "TCS",
    "INFY",
    "HDFCBANK",
    "ICICIBANK",
    # ... add full list or fetch dynamically
}


def compute_signals(symbol: str):
    """
    Stub for signal computation.
    Replace with actual service / DB / indicator logic.
    """
    return {
        "symbol": symbol,
        "rsi": {"value": 62.4, "signal": "NEUTRAL"},
        "macd": {"value": 1.2, "signal": "BUY"},
        "ema_crossover": {"signal": "BUY"},
        "piotroski_score": 7,
        "last_updated": datetime.now(timezone.utc).isoformat()
    }


@router.get("/signals")
def get_signals(symbol: str = Query(..., description="Stock symbol from Nifty 200")):
    symbol = symbol.upper()

    # Validate symbol
    if symbol not in NIFTY_200_SYMBOLS:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid symbol '{symbol}'. Must be part of Nifty 200."
        )

    try:
        data = compute_signals(symbol)
        return data

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail="Failed to compute signals"
        )