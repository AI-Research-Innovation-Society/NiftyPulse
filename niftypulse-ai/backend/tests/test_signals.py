from fastapi.testclient import TestClient
from app.main import app
from datetime import datetime

client = TestClient(app)


def test_get_signals_success():
    response = client.get("/api/v1/signals?symbol=RELIANCE")
    assert response.status_code == 200


def test_get_signals_invalid_symbol():
    response = client.get("/api/v1/signals?symbol=INVALID")

    assert response.status_code == 400
    assert "Invalid symbol" in response.json()["detail"]


def test_get_signals_exact_shape():
    response = client.get("/api/v1/signals?symbol=RELIANCE")
    assert response.status_code == 200

    data = response.json()

    # Top-level keys (exact contract)
    expected_keys = {
        "symbol",
        "rsi",
        "macd",
        "ema_crossover",
        "piotroski_score",
        "last_updated",
    }
    assert set(data.keys()) == expected_keys

    # Symbol
    assert isinstance(data["symbol"], str)
    assert data["symbol"] == "RELIANCE"

    # RSI
    assert set(data["rsi"].keys()) == {"value", "signal"}
    assert isinstance(data["rsi"]["value"], (int, float))
    assert isinstance(data["rsi"]["signal"], str)

    # MACD
    assert set(data["macd"].keys()) == {"value", "signal"}
    assert isinstance(data["macd"]["value"], (int, float))
    assert isinstance(data["macd"]["signal"], str)

    # EMA crossover
    assert set(data["ema_crossover"].keys()) == {"signal"}
    assert isinstance(data["ema_crossover"]["signal"], str)

    # Piotroski score
    assert isinstance(data["piotroski_score"], int)
    assert 0 <= data["piotroski_score"] <= 9

    # Timestamp (ISO 8601 check)
    assert isinstance(data["last_updated"], str)
    datetime.fromisoformat(data["last_updated"].replace("Z", "+00:00"))

    # Optional stricter signal validation
    valid_signals = {"BUY", "SELL", "NEUTRAL"}
    assert data["rsi"]["signal"] in valid_signals
    assert data["macd"]["signal"] in valid_signals
    assert data["ema_crossover"]["signal"] in valid_signals