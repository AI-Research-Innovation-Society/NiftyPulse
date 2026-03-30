# NiftyPulse AI — GitHub Issues (#1-#72)

### Issue #1: Initialize monorepo structure for NiftyPulse AI

**Labels:** area: devops, type: chore, difficulty: beginner, status: open, good first issue
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** S

#### Description
Create the initial repository layout exactly as defined in the project architecture, including `.github`, `frontend`, `backend`, `ml`, `scripts`, and `docs` directories. This gives contributors a stable and consistent workspace from day one.

#### Acceptance Criteria
- [ ] All top-level folders from the architecture spec exist
- [ ] Required placeholder files are created in each key module
- [ ] Directory tree is documented in README
- [ ] Initial scaffold passes basic repository sanity checks

#### Dependencies
None

#### Resources / References
Project architecture spec; GitHub monorepo best practices

### Issue #2: Add baseline .gitignore for Python, Node, ML artifacts

**Labels:** area: devops, type: chore, difficulty: beginner, status: open
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** XS

#### Description
Create a robust `.gitignore` that excludes Python caches, Node build outputs, local secrets, and ML-generated artifacts. This prevents accidental commits of transient or sensitive files.

#### Acceptance Criteria
- [ ] `.gitignore` includes Python and Node ignore rules
- [ ] `.env` and secret variants are ignored while `.env.example` stays tracked
- [ ] Raw/processed data outputs are ignored with explicit `.gitkeep` strategy
- [ ] Ignore file is reviewed for local editor/OS junk entries

#### Dependencies
#1

#### Resources / References
GitHub gitignore templates (Python, Node)

### Issue #3: Create .env.example with frontend/backend required variables

**Labels:** area: backend, area: frontend, type: chore, difficulty: beginner, status: open
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** XS

#### Description
Define all environment variables needed for local development across frontend and backend, including Supabase, DB, Redis, and MLflow settings. This ensures contributors can boot the stack without guessing configuration names.

#### Acceptance Criteria
- [ ] `.env.example` lists frontend variables with `VITE_` prefix
- [ ] Backend runtime/auth/database variables are included
- [ ] Placeholder values are safe and non-secret
- [ ] README setup instructions reference this file

#### Dependencies
#1

#### Resources / References
FastAPI settings docs; Vite env variable conventions

### Issue #4: Set up docker-compose for local Postgres, Redis, and backend

**Labels:** area: devops, area: backend, type: feature, difficulty: intermediate, status: open, priority: high
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** M

#### Description
Create a `docker-compose.yml` that provisions PostgreSQL and Redis and allows the backend service to run in local containers. This standardizes onboarding and avoids machine-specific dependency issues.

#### Acceptance Criteria
- [ ] Compose services for `db` and `redis` start successfully
- [ ] Backend service can run with mounted source code
- [ ] Ports are documented and non-conflicting
- [ ] Health checks or startup validation steps are included in docs

#### Dependencies
#2, #3

#### Resources / References
Docker Compose v3 docs; FastAPI + Postgres local dev guides

### Issue #5: Add GitHub Actions workflow for backend CI (pytest)

**Labels:** area: devops, area: backend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** S

#### Description
Create a GitHub Actions workflow that installs backend dependencies and runs `pytest` on pull requests and pushes to main. This provides automated quality gates for backend changes.

#### Acceptance Criteria
- [ ] Workflow triggers on backend file changes
- [ ] Python 3.11 environment is configured
- [ ] Dependencies install from `backend/requirements.txt`
- [ ] Test step fails workflow on failing tests

#### Dependencies
#1

#### Resources / References
GitHub Actions Python starter workflows

### Issue #6: Add GitHub Actions workflow for frontend CI (Vitest + build)

**Labels:** area: devops, area: frontend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** S

#### Description
Create a frontend CI workflow that runs `npm ci`, executes Vitest, and verifies a successful production build. This catches regressions before merge and keeps UI quality consistent.

#### Acceptance Criteria
- [ ] Workflow triggers on frontend changes
- [ ] Node 20 runtime is configured
- [ ] Vitest runs in CI mode
- [ ] `npm run build` passes as required gate

#### Dependencies
#1

#### Resources / References
GitHub Actions Node workflows; Vitest CI docs

### Issue #7: Create GitHub issue templates (feature, bug, data)

**Labels:** area: docs, type: chore, difficulty: beginner, status: open, good first issue
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** XS

#### Description
Add standardized issue templates to capture clear context for features, bugs, and data tasks. Better issue quality reduces ambiguity and improves student execution speed.

#### Acceptance Criteria
- [ ] `feature.md`, `bug.md`, and `data.md` templates are present
- [ ] Each template captures problem, scope, and acceptance criteria
- [ ] Default labels are pre-filled where helpful
- [ ] Templates render correctly in GitHub issue creation UI

#### Dependencies
#1

#### Resources / References
GitHub issue template syntax docs

### Issue #8: Add pull request template with quality checklist

**Labels:** area: docs, type: chore, difficulty: beginner, status: open, good first issue
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** XS

#### Description
Create a PR template that enforces linked issue references, testing checks, documentation updates, and SEBI-safe language verification. This standardizes review quality across all contributors.

#### Acceptance Criteria
- [ ] PR template exists under `.github/PULL_REQUEST_TEMPLATE.md`
- [ ] Includes `Closes #<issue>` section
- [ ] Includes explicit test/lint checklist
- [ ] Includes compliance language confirmation checkbox

#### Dependencies
#1

#### Resources / References
GitHub pull request template docs

### Issue #9: Write CONTRIBUTING.md with workflow conventions

**Labels:** area: docs, type: feature, difficulty: beginner, status: open
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** S

#### Description
Write a complete contribution guide covering forking, branch naming, commit conventions, issue pickup flow, and PR expectations. This serves as the operating manual for student collaboration.

#### Acceptance Criteria
- [ ] Branch naming and conventional commits are documented
- [ ] Issue pickup process is clear and actionable
- [ ] PR checklist and review expectations are included
- [ ] Labeling and prioritization model is documented

#### Dependencies
#7, #8

#### Resources / References
Conventional Commits; Open source contribution playbooks

### Issue #10: Write README.md first production draft

**Labels:** area: docs, type: feature, difficulty: beginner, status: open
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** S

#### Description
Create a polished README with project overview, features, stack, repository structure, setup steps, contribution pointer, and SEBI disclaimer. This is the first touchpoint for new contributors and external reviewers.

#### Acceptance Criteria
- [ ] README includes project description and feature highlights
- [ ] Tech stack table and folder overview are included
- [ ] Setup section is step-by-step and copy-paste friendly
- [ ] License and disclaimer sections are present

#### Dependencies
#1, #3, #4, #9

#### Resources / References
Well-structured OSS README examples

### Issue #11: Set up Supabase project and design PostgreSQL schema (stocks, signals, patterns, users)

**Labels:** area: backend, area: data, type: feature, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** M

#### Description
Initialize Supabase project settings for local/dev usage and design relational schema for core entities: stocks, OHLCV snapshots, signal runs, detected patterns, and user metadata. Strong schema and environment setup are foundational for every downstream feature.

#### Acceptance Criteria
- [ ] ERD or schema doc covering all required entities is added
- [ ] Supabase connection details and setup steps are documented
- [ ] Primary/foreign keys and indexes are defined
- [ ] Time-series tables include suitable date/time fields
- [ ] Design supports efficient symbol/date range queries

#### Dependencies
#1

#### Resources / References
PostgreSQL schema design for time-series analytics

### Issue #12: Implement SQLAlchemy models for core tables

**Labels:** area: backend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** M

#### Description
Implement SQLAlchemy ORM models based on the approved schema for stocks, signals, patterns, and users. This enables consistent backend data access and migration generation.

#### Acceptance Criteria
- [ ] Model classes created for all core tables
- [ ] Relationships and constraints are mapped correctly
- [ ] Naming conventions are consistent across models
- [ ] Model metadata imports cleanly in backend startup

#### Dependencies
#11

#### Resources / References
SQLAlchemy 2.0 declarative model docs

### Issue #13: Set up Alembic migrations and initial schema migration

**Labels:** area: backend, area: devops, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** S

#### Description
Configure Alembic in the backend project and create the first migration from ORM metadata. Migration tooling ensures reliable, versioned database changes across contributors and environments.

#### Acceptance Criteria
- [ ] Alembic configuration initialized in backend directory
- [ ] Initial revision creates all baseline tables
- [ ] Upgrade/downgrade cycle works on local Postgres
- [ ] Migration usage is documented for contributors

#### Dependencies
#12

#### Resources / References
Alembic quickstart and migration environment docs

### Issue #14: Build FastAPI app skeleton with router structure, health endpoint, and JWT middleware hook

**Labels:** area: backend, type: feature, difficulty: beginner, status: open, good first issue
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** S

#### Description
Set up FastAPI app entrypoint, versioned API router layout, and `/api/v1/health` endpoint, and add a Supabase JWT verification dependency/middleware hook for protected routes. This creates a stable backend baseline for authenticated API feature additions.

#### Acceptance Criteria
- [ ] `app/main.py` initializes FastAPI app
- [ ] Router structure exists under `app/api/v1/routes`
- [ ] Health endpoint returns a simple success payload
- [ ] JWT verification dependency/middleware scaffold is present
- [ ] App starts locally with `uvicorn app.main:app --reload`

#### Dependencies
#1

#### Resources / References
FastAPI larger applications guide

### Issue #15: Initialize frontend stack (React 18 + Vite + Tailwind) and Supabase login/signup flow

**Labels:** area: frontend, type: feature, difficulty: intermediate, status: open, priority: high
**Milestone:** Milestone 1 — Project Foundation
**Estimated effort:** M

#### Description
Create the frontend application scaffold with React 18, Vite, and TailwindCSS, then integrate Supabase Auth for login/signup route flow and base protected routing behavior. This unblocks all subsequent UI work.

#### Acceptance Criteria
- [ ] Vite React app builds and runs locally
- [ ] Tailwind is configured and styles render correctly
- [ ] Login and Signup pages integrate with Supabase Auth APIs
- [ ] Auth state can protect at least one route in the app shell
- [ ] Frontend CI script commands (`dev`, `build`, `test`) are functional

#### Dependencies
#1, #6

#### Resources / References
Vite React docs; Tailwind with Vite setup

### Issue #16: Build script to fetch and maintain official Nifty 200 constituent list

**Labels:** area: data, type: feature, difficulty: intermediate, status: open, priority: high
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** S

#### Description
Implement `scripts/fetch_nifty200.py` to fetch the current Nifty 200 list and persist normalized symbol metadata in the database. Accurate constituent data is the root dependency for all downstream analytics.

#### Acceptance Criteria
- [ ] Script fetches constituent list from NSE-compatible source
- [ ] Symbol normalization rules are applied consistently
- [ ] Database upsert avoids duplicate stock entries
- [ ] Script logs count of added/updated/deactivated symbols

#### Dependencies
#11, #13

#### Resources / References
NSE index constituent docs; pandas data normalization guides

### Issue #17: Implement yfinance EOD OHLCV fetcher for all Nifty 200 stocks

**Labels:** area: data, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** M

#### Description
Create a data ingestion module that pulls daily OHLCV bars for each tracked symbol using yfinance and stores them in time-series tables. Reliable historical price data is required for technical indicators and model training.

#### Acceptance Criteria
- [ ] Fetcher supports full backfill and incremental daily updates
- [ ] OHLCV records are persisted with symbol/date uniqueness
- [ ] Fetch failures are logged with retry-safe behavior
- [ ] Script can run for all constituents in one command

#### Dependencies
#16

#### Resources / References
yfinance API docs; robust batch ingestion patterns

### Issue #18: Add data validation and cleaning module for market data quality

**Labels:** area: data, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** M

#### Description
Implement validation routines that handle missing values, outliers, split adjustments, and dividend anomalies in OHLCV data. This prevents noisy inputs from degrading signals and model performance.

#### Acceptance Criteria
- [ ] Validation rules for nulls, negative values, and duplicate dates are implemented
- [ ] Split/dividend adjustment policy is documented and applied
- [ ] Cleaned output is separated from raw ingest layer
- [ ] Validation summary report is produced per run

#### Dependencies
#17

#### Resources / References
Financial time-series cleaning best practices

### Issue #19: Build BSE shareholding pattern scraper for promoter percentage

**Labels:** area: data, type: feature, difficulty: advanced, status: open, help wanted
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** L

#### Description
Develop a scraper/parser for BSE shareholding disclosures to capture promoter holding percentages by reporting period. Promoter trend changes are a key fundamental signal for the platform.

#### Acceptance Criteria
- [ ] Scraper retrieves latest and historical promoter holdings
- [ ] Extracted data is normalized to consistent quarterly schema
- [ ] Source parsing handles common filing format variations
- [ ] Error handling protects pipeline from malformed filings

#### Dependencies
#16

#### Resources / References
BSE corporate filing pages; HTML parsing with BeautifulSoup/lxml

### Issue #20: Implement NSE delivery volume data fetcher

**Labels:** area: data, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** M

#### Description
Create an ingestion module for daily delivery volume metrics from NSE sources and persist symbol-level ratios. Delivery anomalies depend on this feed being complete and accurate.

#### Acceptance Criteria
- [ ] Fetcher collects delivery volume for tracked symbols
- [ ] Records are linked to trading date and symbol
- [ ] Missing symbol/day values are handled gracefully
- [ ] Retry/backoff logic is included for transient fetch failures

#### Dependencies
#16

#### Resources / References
NSE bhavcopy / delivery report references

### Issue #21: Ingest operating cash flow data from trusted public source

**Labels:** area: data, type: feature, difficulty: advanced, status: open
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** L

#### Description
Implement quarterly operating cash flow ingestion using a legally permissible and documented source (for example, structured filings or licensed aggregators). Cash flow trend analysis depends on consistent historical financial statement values.

#### Acceptance Criteria
- [ ] Source selection is documented with legal/usage notes
- [ ] Ingestion maps values to standardized quarterly schema
- [ ] Historical backfill for at least 8 quarters per symbol is supported
- [ ] Data quality checks flag stale or contradictory entries

#### Dependencies
#16

#### Resources / References
Company filings; financial statement parsing references

### Issue #22: Design and implement feature store schema

**Labels:** area: data, area: ml, type: feature, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** M

#### Description
Design feature store tables/views to hold engineered features keyed by symbol and date for both signal and ML use cases. A stable feature store prevents duplicate logic across modules.

#### Acceptance Criteria
- [ ] Feature schema supports point-in-time correctness
- [ ] Table keys include symbol/date and feature version metadata
- [ ] Insert/update workflows prevent duplicate feature rows
- [ ] Schema is documented in `docs/architecture.md` or data docs

#### Dependencies
#11, #13, #18

#### Resources / References
Feature store design principles; point-in-time data leakage prevention

### Issue #23: Set up Celery + Redis workers for scheduled EOD jobs

**Labels:** area: backend, area: devops, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** M

#### Description
Configure Celery workers and Redis broker to run asynchronous and scheduled ingestion tasks. This enables nightly automation without blocking API performance.

#### Acceptance Criteria
- [ ] Celery app configuration is added to backend
- [ ] Redis broker/back-end settings are environment-driven
- [ ] A sample task executes successfully end-to-end
- [ ] Worker startup command is documented

#### Dependencies
#4, #14

#### Resources / References
Celery + Redis setup docs

### Issue #24: Implement nightly EOD pipeline orchestrator task

**Labels:** area: data, area: backend, type: feature, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** L

#### Description
Create an orchestrator task that runs all EOD fetchers and cleaners in sequence with structured logging and failure handling. This becomes the platform’s core daily ingestion job.

#### Acceptance Criteria
- [ ] Orchestrator runs constituent refresh, OHLCV, delivery, promoter, and cash flow jobs
- [ ] Task order and retry policy are explicit
- [ ] Partial failures are captured without silent data corruption
- [ ] End-of-run summary metrics are persisted/logged

#### Dependencies
#17, #18, #19, #20, #21, #23

#### Resources / References
Pipeline orchestration patterns; Celery chains/chords

### Issue #25: Add FastAPI endpoints for stocks list and OHLCV history

**Labels:** area: backend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** S

#### Description
Implement `GET /stocks` and `GET /stocks/{symbol}/ohlcv` endpoints with pagination and basic filters. These endpoints provide foundational data for frontend screener and detail pages.

#### Acceptance Criteria
- [ ] `/stocks` returns normalized stock metadata list
- [ ] `/stocks/{symbol}/ohlcv` supports date-range query params
- [ ] Invalid symbol/date input returns clear 4xx responses
- [ ] Response schemas are documented in OpenAPI

#### Dependencies
#14, #17

#### Resources / References
FastAPI path/query parameter docs

### Issue #26: Add API rate limiting and Redis caching layer

**Labels:** area: backend, area: devops, type: feature, difficulty: advanced, status: open
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** M

#### Description
Implement API rate limiting and short-lived response caching using Redis to protect backend stability and reduce repetitive load. This is required before wider multi-user testing.

#### Acceptance Criteria
- [ ] Rate limits are configurable by endpoint and environment
- [ ] High-read endpoints include cache with TTL strategy
- [ ] Cache keys include symbol/date parameters where applicable
- [ ] Rate limit and cache behavior are covered by tests

#### Dependencies
#23, #25

#### Resources / References
FastAPI middleware patterns; Redis caching strategies

### Issue #27: Create database seed script with sample data for 10 stocks

**Labels:** area: data, type: chore, difficulty: beginner, status: open, good first issue
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** S

#### Description
Implement `scripts/seed_db.py` to populate local environments with a representative 10-stock dataset, including OHLCV and sample signal placeholders. Seed data accelerates frontend and API development.

#### Acceptance Criteria
- [ ] Seed script inserts deterministic demo dataset
- [ ] Script can be re-run safely without duplicate records
- [ ] Includes sample stock metadata and historical OHLCV
- [ ] Usage command is documented in README/onboarding docs

#### Dependencies
#13, #17

#### Resources / References
Idempotent data seeding patterns

### Issue #28: Add integration tests for full data pipeline flow

**Labels:** area: data, area: backend, type: feature, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 2 — Data Pipeline
**Estimated effort:** L

#### Description
Write integration tests covering ingestion flow from fetch modules through persistence and API exposure on controlled sample inputs. This validates pipeline reliability before signal engine work begins.

#### Acceptance Criteria
- [ ] Tests cover happy path for at least OHLCV and delivery data
- [ ] Tests assert DB writes and schema integrity
- [ ] Failure scenarios (missing fields, bad symbols) are tested
- [ ] Test suite runs in CI with clear fixtures/setup

#### Dependencies
#24, #25, #27

#### Resources / References
pytest integration testing with Postgres fixtures

### Issue #29: Implement Piotroski F-Score calculator module (9-point criteria)

**Labels:** area: ml, area: backend, type: feature, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** M

#### Description
Build a module that computes Piotroski F-Score using nine accounting criteria from financial statement inputs. This signal provides a fundamental quality score per stock for EOD analysis.

#### Acceptance Criteria
- [ ] All 9 Piotroski checks are implemented and documented
- [ ] Input schema validates required financial fields
- [ ] Output returns per-criterion flags and total score
- [ ] Unit tests cover edge cases and missing data handling

#### Dependencies
#21, #22

#### Resources / References
Piotroski F-Score original methodology

### Issue #30: Build delivery volume anomaly detector using rolling baseline

**Labels:** area: ml, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** S

#### Description
Implement anomaly detection for delivery volume using rolling mean/std or robust percentile baseline. The detector should flag statistically unusual delivery participation by symbol and date.

#### Acceptance Criteria
- [ ] Configurable rolling window and anomaly threshold parameters
- [ ] Detector outputs anomaly score and binary flag
- [ ] Handles low-history symbols safely
- [ ] Unit tests validate known anomaly scenarios

#### Dependencies
#20, #22

#### Resources / References
Z-score anomaly detection references

### Issue #31: Implement MACD calculator with 12/26/9 standard settings

**Labels:** area: ml, type: feature, difficulty: beginner, status: open, good first issue
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** S

#### Description
Create MACD indicator calculations (EMA 12, EMA 26, signal 9) and derive bullish/bearish crossover flags. MACD is a core technical signal shown in screener and stock detail views.

#### Acceptance Criteria
- [ ] MACD, signal line, and histogram are computed correctly
- [ ] Crossover event logic is implemented
- [ ] Missing/short-history data is handled without crashes
- [ ] Unit tests compare outputs against reference calculations

#### Dependencies
#17, #22

#### Resources / References
Technical analysis indicator references (MACD)

### Issue #32: Implement RSI calculator and overbought/oversold detector

**Labels:** area: ml, type: feature, difficulty: beginner, status: open, good first issue
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** S

#### Description
Implement 14-period RSI computation and define overbought/oversold thresholds for signal generation. RSI output should be reusable for both API and model features.

#### Acceptance Criteria
- [ ] RSI values are computed per symbol/date
- [ ] Overbought/oversold flags are configurable (default 70/30)
- [ ] Data gaps are handled gracefully
- [ ] Unit tests validate formula correctness

#### Dependencies
#17, #22

#### Resources / References
Wilder RSI formula references

### Issue #33: Implement EMA crossover signals (20/50/200)

**Labels:** area: ml, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** S

#### Description
Build EMA calculators for 20/50/200 periods and derive crossover state transitions (golden/death cross variants). This captures momentum and trend regime shifts.

#### Acceptance Criteria
- [ ] EMA20/EMA50/EMA200 values are computed consistently
- [ ] Crossover event states are defined and emitted
- [ ] Output format aligns with signal aggregation schema
- [ ] Unit tests cover crossover transitions and edge periods

#### Dependencies
#17, #22

#### Resources / References
EMA technical analysis references

### Issue #34: Create promoter shareholding change detector (QoQ deltas)

**Labels:** area: data, area: ml, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** S

#### Description
Implement logic that computes quarter-over-quarter promoter holding deltas and flags significant changes. This transforms raw filing data into actionable governance signal features.

#### Acceptance Criteria
- [ ] QoQ promoter percentage delta is computed per symbol
- [ ] Significant change threshold is configurable
- [ ] Detector handles missing quarters and stale filings
- [ ] Unit tests include increase, decrease, and unchanged scenarios

#### Dependencies
#19

#### Resources / References
BSE shareholding disclosure formats

### Issue #35: Implement operating cash flow trend analyzer (3-quarter rolling)

**Labels:** area: ml, area: data, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** S

#### Description
Build a module to score operating cash flow direction and consistency over rolling three-quarter windows. This adds a simple, explainable financial health trend indicator.

#### Acceptance Criteria
- [ ] 3-quarter rolling trend computation is implemented
- [ ] Trend categories (improving/stable/deteriorating) are defined
- [ ] Missing quarter sequences are treated explicitly
- [ ] Unit tests validate trend classification behavior

#### Dependencies
#21

#### Resources / References
Cash flow trend analysis practices

### Issue #36: Build signal aggregator for per-stock composite score

**Labels:** area: backend, area: ml, type: feature, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** M

#### Description
Create aggregation logic that combines all signal modules into a unified per-stock signal score with interpretable sub-scores. This output powers ranking in APIs and frontend screener.

#### Acceptance Criteria
- [ ] Aggregator ingests all implemented signal outputs
- [ ] Weighting strategy is configurable and documented
- [ ] Final payload includes component-level transparency
- [ ] Unit tests verify deterministic scoring behavior

#### Dependencies
#29, #30, #31, #32, #33, #34, #35

#### Resources / References
Multi-factor scoring design patterns

### Issue #37: Persist signal runs and outputs to PostgreSQL

**Labels:** area: backend, area: data, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** M

#### Description
Implement repository/service layer logic to write signal run metadata and per-symbol outputs to database tables. Persisted runs are required for history endpoints and auditability.

#### Acceptance Criteria
- [ ] Signal run table stores run timestamp, version, and job status
- [ ] Per-symbol signal outputs are stored with run foreign key
- [ ] Upsert/insert behavior is idempotent for reruns
- [ ] Persistence tests cover success and rollback paths

#### Dependencies
#13, #36

#### Resources / References
SQLAlchemy transaction patterns

### Issue #38: Add FastAPI endpoints GET /signals and GET /signals/{symbol}

**Labels:** area: backend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** S

#### Description
Expose latest signal results via API endpoints for all symbols and single-symbol drill-down. These routes are consumed by the frontend dashboard and screener.

#### Acceptance Criteria
- [ ] `/signals` supports pagination and optional sorting by score
- [ ] `/signals/{symbol}` returns current signal breakdown for the symbol
- [ ] Response model includes component signals and aggregate score
- [ ] Endpoint tests validate schema and error behavior

#### Dependencies
#37

#### Resources / References
FastAPI response models and pagination patterns

### Issue #39: Add signal history endpoint with date-range filtering

**Labels:** area: backend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** S

#### Description
Create an API endpoint that returns historical signal snapshots for a symbol across a date range. This supports trend visualization and model explainability use cases.

#### Acceptance Criteria
- [ ] Endpoint supports required `from` and `to` date filters
- [ ] Query handles sparse days without breaking output format
- [ ] Validation prevents invalid ranges and excessive payloads
- [ ] Tests verify range filtering and ordering

#### Dependencies
#37

#### Resources / References
Time-series API design best practices

### Issue #40: Add unit tests for each signal calculator module

**Labels:** area: ml, type: chore, difficulty: intermediate, status: open, priority: high
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** M

#### Description
Write isolated unit tests for Piotroski, delivery anomaly, MACD, RSI, EMA crossover, promoter delta, and cashflow trend modules. Comprehensive unit coverage reduces regression risk as logic evolves.

#### Acceptance Criteria
- [ ] Every signal module has dedicated test cases
- [ ] Tests include normal, boundary, and missing-data scenarios
- [ ] Expected outputs are asserted with deterministic fixtures
- [ ] Tests are wired into backend CI execution

#### Dependencies
#29, #30, #31, #32, #33, #34, #35

#### Resources / References
pytest parametrization and fixture patterns

### Issue #41: Add end-to-end signal engine integration test on sample dataset

**Labels:** area: ml, area: backend, type: feature, difficulty: advanced, status: open
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** M

#### Description
Build an integration test that runs full signal computation for a sample dataset and validates persisted API-readable results. This verifies compatibility across modules, storage, and services.

#### Acceptance Criteria
- [ ] Test executes full signal pipeline on fixture data
- [ ] Aggregated scores and component outputs are persisted
- [ ] API endpoint checks validate returned signal payloads
- [ ] Failures produce actionable logs for debugging

#### Dependencies
#36, #37, #38, #40

#### Resources / References
Integration testing for data/ML services

### Issue #42: Implement EOD scan runner script tying all signal modules

**Labels:** area: backend, area: mlops, type: feature, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 3 — Signal Engine
**Estimated effort:** M

#### Description
Implement `scripts/eod_scan.py` as the orchestrated entrypoint that pulls latest prepared data, computes all signals, persists results, and emits run status logs. This script becomes the operational daily signal job.

#### Acceptance Criteria
- [ ] Script triggers signal calculation pipeline end-to-end
- [ ] Run metadata and per-stock outputs are persisted
- [ ] Failures exit with non-zero status and clear diagnostics
- [ ] Script can be invoked manually and via scheduler

#### Dependencies
#24, #36, #37

#### Resources / References
Batch job orchestration and observability patterns

### Issue #43: Create EDA notebook for Nifty 200 OHLCV statistical analysis

**Labels:** area: ml, type: research, difficulty: intermediate, status: open
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** S

#### Description
Develop an exploratory notebook that profiles OHLCV distributions, volatility regimes, missingness, and cross-symbol behavior. This informs feature design and model baseline assumptions.

#### Acceptance Criteria
- [ ] Notebook includes summary statistics and visual diagnostics
- [ ] Outlier/missingness findings are documented
- [ ] Key insights are summarized in markdown cells
- [ ] Notebook is reproducible with clear data input path

#### Dependencies
#18, #28

#### Resources / References
Pandas profiling and EDA best practices

### Issue #44: Build feature engineering module for technical indicator features

**Labels:** area: ml, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** M

#### Description
Implement reusable feature engineering code to transform cleaned market data into model-ready features (indicators, lags, rolling stats). Feature consistency is critical across train and inference pipelines.

#### Acceptance Criteria
- [ ] Module computes standardized set of technical features
- [ ] Feature outputs are keyed by symbol/date without leakage
- [ ] Feature config supports adding/removing indicators
- [ ] Unit tests validate shape, null-handling, and deterministic output

#### Dependencies
#22, #31, #32, #33

#### Resources / References
Feature engineering for time-series classification

### Issue #45: Define labeling strategy for valid signal target variable

**Labels:** area: ml, type: research, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** M

#### Description
Define and document supervised target labeling logic for what counts as a valid signal outcome over a specified horizon. A rigorous target definition is essential to avoid misleading model performance.

#### Acceptance Criteria
- [ ] Label definition includes look-ahead horizon and thresholds
- [ ] Leakage risks are identified and mitigated
- [ ] Label generation script/module is implemented
- [ ] Strategy is documented in ML docs with examples

#### Dependencies
#43, #44

#### Resources / References
Label leakage and supervised finance modeling references

### Issue #46: Train baseline Logistic Regression classification model

**Labels:** area: ml, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** S

#### Description
Create a baseline classifier using scikit-learn Logistic Regression to establish a benchmark before moving to more complex models. Baselines help detect when complexity is not adding real value.

#### Acceptance Criteria
- [ ] Training script runs end-to-end on engineered dataset
- [ ] Train/validation/test split strategy is documented
- [ ] Baseline metrics are logged and reproducible
- [ ] Model artifact is saved for downstream evaluation

#### Dependencies
#44, #45

#### Resources / References
scikit-learn classification workflow docs

### Issue #47: Implement XGBoost training with hyperparameter tuning

**Labels:** area: ml, type: feature, difficulty: advanced, status: open
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** M

#### Description
Train an XGBoost classifier with configurable hyperparameter search to improve predictive quality over baseline. This model is expected to become the primary production candidate.

#### Acceptance Criteria
- [ ] Training script supports grid/random search configuration
- [ ] Validation metrics are logged for each trial
- [ ] Best model parameters are captured and exported
- [ ] Reproducibility controls (seed/version) are implemented

#### Dependencies
#46

#### Resources / References
XGBoost Python API and tuning guidance

### Issue #48: Set up MLflow tracking server and experiment logging

**Labels:** area: mlops, area: ml, type: feature, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** M

#### Description
Configure MLflow tracking in local/dev environments and integrate experiment logging from model training scripts. This introduces traceability for parameters, metrics, and artifacts.

#### Acceptance Criteria
- [ ] MLflow tracking URI is environment-configurable
- [ ] Training scripts log params, metrics, and artifacts
- [ ] Runs are grouped by named experiments
- [ ] Basic usage instructions are documented for contributors

#### Dependencies
#46, #47

#### Resources / References
MLflow tracking quickstart

### Issue #49: Build model evaluation module (precision, recall, F1, confusion matrix)

**Labels:** area: ml, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** S

#### Description
Create a reusable evaluation module that computes core classification metrics and confusion matrix outputs for each experiment. Standardized evaluation keeps model comparisons fair and transparent.

#### Acceptance Criteria
- [ ] Evaluation utility computes precision, recall, F1, and confusion matrix
- [ ] Supports binary threshold tuning where applicable
- [ ] Output artifacts are savable to files/MLflow
- [ ] Unit tests verify metric calculations

#### Dependencies
#46, #47

#### Resources / References
scikit-learn metrics documentation

### Issue #50: Implement model versioning and registry workflow in MLflow

**Labels:** area: mlops, type: feature, difficulty: advanced, status: open
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** M

#### Description
Set up model registration and stage transitions in MLflow so trained models can be promoted and referenced by version. This is needed for controlled deployment and reproducible rollback.

#### Acceptance Criteria
- [ ] Best-performing model can be registered automatically
- [ ] Model versions include metadata tags (data range, feature set)
- [ ] Registry stage transition process is documented
- [ ] Inference path can load model by registered version/stage

#### Dependencies
#48, #49

#### Resources / References
MLflow model registry docs

### Issue #51: Implement automated weekly retraining scheduler (Celery beat)

**Labels:** area: mlops, area: backend, type: feature, difficulty: advanced, status: open
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** M

#### Description
Create a Celery beat schedule that triggers weekly retraining pipeline execution, with run logs and failure alerts. Scheduled retraining ensures model freshness as market regimes shift.

#### Acceptance Criteria
- [ ] Weekly retraining schedule is configurable by environment
- [ ] Retraining task triggers feature prep, train, evaluate, register flow
- [ ] Success/failure status is logged and queryable
- [ ] Safe guardrails prevent overlapping retrain jobs

#### Dependencies
#23, #47, #50

#### Resources / References
Celery beat scheduling docs

### Issue #52: Generate Evidently data drift reports for production features

**Labels:** area: mlops, area: ml, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** M

#### Description
Implement drift monitoring that compares recent inference feature distributions against training baseline using Evidently. Drift reports should be stored and reviewable by maintainers.

#### Acceptance Criteria
- [ ] Drift report job runs on configurable cadence
- [ ] Baseline and current datasets are versioned clearly
- [ ] Reports are saved to `ml/drift` and/or artifact storage
- [ ] Drift summary status can be surfaced to API/ops logs

#### Dependencies
#44, #48, #50

#### Resources / References
Evidently monitoring documentation

### Issue #53: Implement rule-based cup and handle pattern detector

**Labels:** area: ml, type: feature, difficulty: advanced, status: open, help wanted
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** L

#### Description
Build a deterministic chart pattern detector for cup-and-handle formation using OHLCV-derived swing points and geometric constraints. Detected patterns should include confidence-like scoring and time windows.

#### Acceptance Criteria
- [ ] Detection algorithm defines cup depth, duration, and handle rules
- [ ] Output includes start/end indices and confidence score
- [ ] False positive guardrails are documented
- [ ] Unit tests include known positive and negative examples

#### Dependencies
#17, #44

#### Resources / References
Rule-based chart pattern research notes

### Issue #54: Implement rule-based rising and falling wedge detector

**Labels:** area: ml, type: feature, difficulty: advanced, status: open, help wanted
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** L

#### Description
Develop pattern logic for rising and falling wedge structures using converging trendlines over configurable windows. This extends live pattern coverage for momentum reversal analysis.

#### Acceptance Criteria
- [ ] Trendline fitting and convergence criteria are implemented
- [ ] Rising vs falling wedge classification is supported
- [ ] Pattern outputs include date range and signal direction
- [ ] Tests validate wedge detection against curated samples

#### Dependencies
#17, #44

#### Resources / References
Technical pattern geometry references

### Issue #55: Implement rule-based head and shoulders detector

**Labels:** area: ml, type: feature, difficulty: advanced, status: open, help wanted
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** L

#### Description
Implement detection for head-and-shoulders and inverse variants using swing highs/lows and neckline criteria. This module should expose explainable pattern metadata for UI overlays.

#### Acceptance Criteria
- [ ] Detector handles standard and inverse pattern variants
- [ ] Neckline, shoulder symmetry, and head prominence rules are codified
- [ ] Output includes confidence score and invalidation condition
- [ ] Unit tests cover both true positives and false positives

#### Dependencies
#17, #44

#### Resources / References
Pattern detection algorithm design references

### Issue #56: Add FastAPI endpoints for patterns and model info

**Labels:** area: backend, area: mlops, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** S

#### Description
Implement `GET /patterns/{symbol}` for detected chart patterns and `GET /ml/model-info` for current model metadata. These endpoints connect ML outputs to frontend visibility.

#### Acceptance Criteria
- [ ] Pattern endpoint returns active/recent patterns for symbol
- [ ] Model info endpoint includes version, metrics, last retrain timestamp
- [ ] Response contracts are documented and validated
- [ ] Endpoint tests verify behavior for missing data states

#### Dependencies
#50, #53, #54, #55

#### Resources / References
FastAPI response schemas and dependency injection docs

### Issue #57: Add full ML pipeline integration test

**Labels:** area: ml, area: mlops, type: feature, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 4 — ML & Pattern Detection
**Estimated effort:** L

#### Description
Create an integration test that runs feature generation, labeling, model training, evaluation, registration, and inference metadata retrieval on sample data. This verifies end-to-end ML pipeline integrity before frontend integration.

#### Acceptance Criteria
- [ ] Test executes complete ML pipeline on deterministic fixture dataset
- [ ] MLflow logging and model registration steps are validated
- [ ] Pattern and model-info endpoint dependencies are covered
- [ ] CI-compatible execution path is documented (subset mode if needed)

#### Dependencies
#44, #45, #47, #48, #50, #56

#### Resources / References
End-to-end MLOps testing patterns

### Issue #58: Build global app layout with sidebar, header, and responsive shell

**Labels:** area: frontend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** M

#### Description
Implement application shell layout with persistent sidebar navigation, top header, and responsive behavior for tablet/mobile screens. This establishes navigational consistency for all frontend pages.

#### Acceptance Criteria
- [ ] Layout includes sidebar links for all major routes
- [ ] Header supports page title and auth/user action slot
- [ ] Mobile breakpoint provides usable collapsed navigation
- [ ] Layout components are reusable across route pages

#### Dependencies
#15

#### Resources / References
Responsive dashboard layout patterns in React + Tailwind

### Issue #59: Build dashboard home page with market overview cards

**Labels:** area: frontend, type: feature, difficulty: beginner, status: open, good first issue
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** S

#### Description
Create a dashboard landing page showing top signals for the current day and summary cards (signal counts, strongest movers, pattern alerts). This gives users an immediate high-level pulse of the market.

#### Acceptance Criteria
- [ ] Overview cards render using API-provided data or seeded fallback
- [ ] Top signal list component is sortable by score
- [ ] Empty/loading/error states are handled cleanly
- [ ] SEBI disclaimer component is visible on page

#### Dependencies
#38, #58

#### Resources / References
Card-based dashboard UI best practices

### Issue #60: Implement stock screener page with sortable/filterable table

**Labels:** area: frontend, type: feature, difficulty: intermediate, status: open, priority: high
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** M

#### Description
Develop a screener page showing all Nifty 200 stocks with composite signal scores, sortable columns, and filter controls. This is the primary decision-support interface for users.

#### Acceptance Criteria
- [ ] Table displays symbol, name, sector, and key signal metrics
- [ ] Sorting works for numeric and textual columns
- [ ] Filters support score range and signal-type flags
- [ ] Pagination or virtualization handles 200-row performance

#### Dependencies
#38, #58

#### Resources / References
React table optimization patterns

### Issue #61: Build stock detail page with OHLCV chart (TradingView Lightweight Charts)

**Labels:** area: frontend, type: feature, difficulty: advanced, status: open
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** M

#### Description
Implement stock detail route with interactive OHLCV chart using TradingView Lightweight Charts and backend OHLCV API integration. This is the foundation for signal and pattern overlays.

#### Acceptance Criteria
- [ ] Chart renders OHLCV data for selected symbol and date range
- [ ] Timeframe controls update chart data correctly
- [ ] API loading and error states are clearly handled
- [ ] Chart component is reusable for other visual modules

#### Dependencies
#25, #58

#### Resources / References
TradingView Lightweight Charts docs

### Issue #62: Add stock detail signal breakdown panel

**Labels:** area: frontend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** S

#### Description
Create a panel in stock detail view that displays all computed signals and aggregate score with human-readable explanations. This improves transparency and interpretability for users.

#### Acceptance Criteria
- [ ] Panel consumes `/signals/{symbol}` endpoint data
- [ ] Each signal shows value, status, and short explanation
- [ ] Aggregate score is visually distinct
- [ ] Missing signal fields are handled gracefully

#### Dependencies
#38, #61

#### Resources / References
Explainable UI patterns for analytical dashboards

### Issue #63: Add pattern detection overlay to stock chart

**Labels:** area: frontend, area: ml, type: feature, difficulty: advanced, status: open
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** M

#### Description
Overlay detected chart patterns on the stock detail chart, including labels and time-window highlights for active patterns. This connects ML pattern modules to user-facing visual interpretation.

#### Acceptance Criteria
- [ ] Pattern data from `/patterns/{symbol}` is rendered as overlays
- [ ] Multiple pattern types can coexist without visual clutter
- [ ] Overlay legend and toggle controls are implemented
- [ ] Fallback UI appears when no patterns are detected

#### Dependencies
#56, #61

#### Resources / References
Chart annotation techniques in Lightweight Charts

### Issue #64: Build ML model info page with version and performance metrics

**Labels:** area: frontend, area: mlops, type: feature, difficulty: beginner, status: open, good first issue
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** S

#### Description
Create a dedicated page that displays active model version, key metrics, last retraining timestamp, and drift status summary. This provides operational transparency for maintainers and reviewers.

#### Acceptance Criteria
- [ ] Page consumes `/ml/model-info` endpoint
- [ ] Metrics include precision, recall, F1, and version metadata
- [ ] Last retrain date/time is formatted clearly
- [ ] Error state offers actionable troubleshooting hint

#### Dependencies
#56, #58

#### Resources / References
ML observability dashboard examples

### Issue #65: Implement persistent SEBI disclaimer banner component

**Labels:** area: frontend, area: docs, type: feature, difficulty: beginner, status: open, priority: high
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** XS

#### Description
Create a persistent, non-dismissable disclaimer banner shown across the application to enforce educational framing and no-advice messaging. Compliance visibility is mandatory for all product surfaces.

#### Acceptance Criteria
- [ ] Banner appears on all authenticated and public app views
- [ ] Messaging follows approved SEBI-safe wording
- [ ] Banner cannot be permanently dismissed
- [ ] Component styling is responsive and accessible

#### Dependencies
#58

#### Resources / References
docs/sebi-compliance.md

### Issue #66: Build Zustand global store for selected stock, date range, and filters

**Labels:** area: frontend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** S

#### Description
Implement centralized client state management for active symbol selection, date ranges, and screener filters using Zustand. This reduces prop drilling and synchronizes behavior across pages.

#### Acceptance Criteria
- [ ] Store includes typed state for symbol, range, and filter criteria
- [ ] Actions are implemented for update/reset flows
- [ ] Relevant pages read/write state consistently
- [ ] Store logic has basic unit tests

#### Dependencies
#58, #60, #61

#### Resources / References
Zustand official patterns and middleware docs

### Issue #67: Implement frontend API service layer for backend endpoints

**Labels:** area: frontend, area: backend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** S

#### Description
Create a centralized API client wrapper for stocks, signals, patterns, auth/session, and model info endpoints with consistent error handling. This improves maintainability and avoids duplicated request logic.

#### Acceptance Criteria
- [ ] Service modules map all required backend endpoints
- [ ] Shared request/response typing and error normalization are implemented
- [ ] Auth token injection support is included
- [ ] API mocks or tests validate client behavior

#### Dependencies
#25, #38, #56

#### Resources / References
Axios/fetch abstraction patterns

### Issue #68: Implement authentication flow (login, protected routes, JWT handling)

**Labels:** area: frontend, area: backend, type: feature, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** M

#### Description
Complete end-to-end authentication with Supabase login/signup UI integration, protected route guards, and JWT propagation for API requests. Secure auth flow is required before production deployment.

#### Acceptance Criteria
- [ ] Login/signup pages integrate with Supabase Auth APIs
- [ ] Protected routes redirect unauthenticated users correctly
- [ ] JWT is stored and refreshed securely on frontend
- [ ] Backend JWT verification middleware validates tokens

#### Dependencies
#15

#### Resources / References
Supabase Auth docs; FastAPI JWT verification patterns

### Issue #69: Add error boundary and loading skeleton components

**Labels:** area: frontend, type: feature, difficulty: beginner, status: open, good first issue
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** S

#### Description
Implement shared error boundary and skeleton loaders for key data views to improve resilience and UX during API delays or runtime failures. This creates a more reliable production feel.

#### Acceptance Criteria
- [ ] Global error boundary catches rendering exceptions
- [ ] Reusable loading skeletons exist for cards, tables, and charts
- [ ] Major pages use skeletons during async fetch
- [ ] Error fallback UI includes retry/navigation options

#### Dependencies
#58, #59, #60, #61

#### Resources / References
React error boundaries and suspense patterns

### Issue #70: Configure Netlify deployment for frontend (netlify.toml + build settings)

**Labels:** area: devops, area: frontend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** S

#### Description
Add Netlify deployment configuration with build command, output directory, and SPA redirects so frontend can be deployed from main branch. This establishes production hosting for UI delivery.

#### Acceptance Criteria
- [ ] `netlify.toml` is added with build and publish settings
- [ ] SPA redirect rules are configured for client-side routing
- [ ] Required environment variables are documented
- [ ] Manual deploy preview succeeds from a test branch

#### Dependencies
#58, #67, #68

#### Resources / References
Netlify Vite deployment docs

### Issue #71: Add GitHub Action for frontend auto-deploy to Netlify on main merge

**Labels:** area: devops, area: frontend, type: feature, difficulty: intermediate, status: open
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** S

#### Description
Implement a CI workflow that triggers Netlify deploy after successful merge/build on main using secure tokens and environment variables. This enables continuous delivery for frontend releases.

#### Acceptance Criteria
- [ ] Workflow triggers only on main branch merges
- [ ] Build step passes before deployment trigger
- [ ] Netlify credentials are pulled from GitHub secrets
- [ ] Deployment status is visible in workflow logs

#### Dependencies
#6, #70

#### Resources / References
Netlify CLI/API deployment automation docs

### Issue #72: Add end-to-end frontend smoke test (load, auth, signals rendering)

**Labels:** area: frontend, area: devops, type: feature, difficulty: advanced, status: open, priority: high
**Milestone:** Milestone 5 — Frontend & Deployment
**Estimated effort:** M

#### Description
Create an end-to-end smoke test that verifies app boot, authentication flow, key page rendering, and signal data display in a deployment-like environment. This acts as final release confidence gate.

#### Acceptance Criteria
- [ ] Smoke test covers app load and navigation to core pages
- [ ] Auth login flow is validated with test credentials
- [ ] Signals data is fetched and rendered in UI assertions
- [ ] Test runs in CI with clear pass/fail reporting

#### Dependencies
#59, #60, #61, #62, #67, #68, #71

#### Resources / References
Playwright/Cypress smoke testing patterns
