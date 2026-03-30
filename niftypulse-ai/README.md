# NiftyPulse AI

```text
╔══════════════════════════════════════════════════════════════════════╗
║                          NiftyPulse AI                              ║
║      AI-powered end-of-day and live signal platform for Nifty 200   ║
╚══════════════════════════════════════════════════════════════════════╝
```

NiftyPulse AI is a production-grade, open-source stock market analysis platform designed for AI-ML Club students to collaboratively build and learn modern full-stack and MLOps workflows. The platform ingests Indian market data for Nifty 200 stocks, computes end-of-day fundamentals and technical signals, detects live chart patterns, and serves insights through a FastAPI backend and React dashboard while remaining compliant with SEBI-safe communication boundaries.

## Feature Highlights
- End-of-day signal scan for all Nifty 200 stocks
- Multi-factor signal engine: Piotroski F-Score, delivery anomalies, MACD, RSI, EMA crossovers, and cash flow trends
- Live pattern detection: wedge, cup-and-handle, double top/bottom, head and shoulders
- MLOps pipeline with MLflow tracking, model registry, retraining, and drift monitoring
- SEBI-aware compliance guardrails and disclaimer-first UX
- CI/CD-ready deployment split: Netlify (frontend) + Render/Railway (backend)

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, Vite, TailwindCSS, Recharts / TradingView Lightweight Charts |
| Backend API | Python 3.11, FastAPI, Uvicorn |
| ML / Data | pandas, numpy, scikit-learn, XGBoost, MLflow, evidently |
| Database | PostgreSQL (via Supabase — hosted) |
| Task Queue | Celery + Redis |
| Data Sources | yfinance, NSE Python, BSE filings scraper |
| Auth | Supabase Auth (JWT) |
| DevOps | GitHub Actions, Docker, Netlify, Render |
| Testing | pytest (backend), Vitest (frontend) |

## Monorepo Structure (Annotated)

```text
niftypulse-ai/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── feature.md                # Template for feature requests
│   │   ├── bug.md                    # Template for bug reports
│   │   └── data.md                   # Template for data ingestion/quality tasks
│   ├── PULL_REQUEST_TEMPLATE.md      # PR checklist and merge readiness criteria
│   └── workflows/
│       ├── backend-ci.yml            # Backend test workflow (pytest)
│       ├── frontend-ci.yml           # Frontend test/build workflow (Vitest + Vite build)
│       └── retrain-scheduler.yml     # Scheduled workflow for model retrain trigger
├── frontend/
│   ├── public/                       # Static frontend assets
│   ├── src/
│   │   ├── components/               # Shared UI components
│   │   ├── pages/                    # Route-level pages
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── services/                 # API call wrappers
│   │   ├── store/                    # Zustand global state store
│   │   └── utils/                    # Frontend helper utilities
│   ├── index.html                    # Vite HTML entrypoint
│   ├── vite.config.js                # Vite bundler/dev-server config
│   └── package.json                  # Frontend scripts and dependencies
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   └── v1/
│   │   │       ├── routes/           # Versioned API route modules
│   │   │       └── dependencies.py   # Shared FastAPI dependencies
│   │   ├── core/                     # App config, security, logging
│   │   ├── db/                       # SQLAlchemy models and migration integration
│   │   ├── services/                 # Backend domain/business logic
│   │   └── main.py                   # FastAPI application bootstrap
│   ├── tests/                        # Backend unit/integration tests
│   └── requirements.txt              # Python dependencies
├── ml/
│   ├── data/
│   │   ├── raw/                      # Raw ingested datasets
│   │   └── processed/                # Cleaned/model-ready datasets
│   ├── features/                     # Feature engineering modules
│   ├── models/                       # Per-model training scripts
│   ├── pipelines/                    # End-to-end ML pipelines
│   ├── mlflow/                       # MLflow experiment and tracking configs
│   ├── drift/                        # Evidently drift reports and jobs
│   └── notebooks/                    # EDA and research notebooks
├── scripts/
│   ├── eod_scan.py                   # Nightly EOD signal scan runner
│   ├── seed_db.py                    # Local DB seeding utility
│   └── fetch_nifty200.py             # Nifty 200 constituent refresh utility
├── docs/
│   ├── architecture.md               # System architecture documentation
│   ├── data-sources.md               # Data source contracts and caveats
│   ├── sebi-compliance.md            # Compliance standards and wording rules
│   └── onboarding.md                 # Student onboarding and workflow guide
├── .env.example                      # Environment variable template
├── .gitignore                        # Ignore rules for Python/Node/data artifacts
├── docker-compose.yml                # Local infra orchestration (API, Postgres, Redis)
├── README.md                         # Project overview and setup guide
├── CONTRIBUTING.md                   # Contributor workflow and standards
└── LICENSE                           # Project license
```

## Local Setup

1. Clone the repository.
```bash
git clone <your-repo-url>
cd niftypulse-ai
```

2. Create environment variables.
```bash
cp .env.example .env
# Fill in Supabase keys and any environment-specific values
```

3. Start local infrastructure.
```bash
docker compose up -d db redis
```

4. Run backend API.
```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

5. Run frontend app (new terminal).
```bash
cd frontend
npm install
npm run dev
```

6. Open the app locally.
- Frontend: `http://localhost:5173`
- Backend docs: `http://localhost:8000/docs`

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md) for issue pickup flow, branch naming, coding conventions, and PR checklist.

## SEBI Disclaimer
NiftyPulse AI is an educational and research platform. It does not provide investment advice, stock recommendations, portfolio management, or buy/sell instructions. All outputs should be interpreted as informational signals only and must include disclaimer-safe language aligned with [docs/sebi-compliance.md](./docs/sebi-compliance.md).

## License
This project is licensed under the MIT License. See [LICENSE](./LICENSE) for details.
