"""FastAPI application entrypoint for NiftyPulse AI backend services."""

from fastapi import APIRouter, FastAPI

app = FastAPI(title="NiftyPulse AI API", version="0.1.0")
api_router = APIRouter(prefix="/api/v1")


@api_router.get("/health", tags=["health"])
def health_check() -> dict[str, str]:
    """Return API health status for uptime checks and CI validation."""
    return {"status": "ok"}


app.include_router(api_router)
