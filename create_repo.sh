#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="niftypulse-ai"

mkdir -p "$REPO_DIR"
cd "$REPO_DIR"

git init

mkdir -p .github/ISSUE_TEMPLATE
mkdir -p .github/workflows
mkdir -p frontend/public frontend/src/{components,pages,hooks,services,store,utils}
mkdir -p backend/app/api/v1/routes backend/app/core backend/app/db backend/app/services backend/tests
mkdir -p ml/data/{raw,processed} ml/{features,models,pipelines,mlflow,drift,notebooks}
mkdir -p scripts docs

# Create baseline files
touch .github/ISSUE_TEMPLATE/{feature.md,bug.md,data.md}
touch .github/PULL_REQUEST_TEMPLATE.md
touch .github/workflows/{backend-ci.yml,frontend-ci.yml,retrain-scheduler.yml}
touch frontend/index.html frontend/vite.config.js frontend/package.json
touch backend/app/api/v1/dependencies.py backend/app/main.py backend/requirements.txt
touch scripts/{eod_scan.py,seed_db.py,fetch_nifty200.py}
touch docs/{architecture.md,data-sources.md,sebi-compliance.md,onboarding.md}
touch .env.example .gitignore docker-compose.yml README.md CONTRIBUTING.md LICENSE

# Track empty data directories
touch ml/data/raw/.gitkeep ml/data/processed/.gitkeep

# Write .gitignore
cat > .gitignore << 'GITIGNORE_EOF'
# Python
__pycache__/
*.py[cod]
*.so
.venv/
venv/
.pytest_cache/
.mypy_cache/
.coverage
htmlcov/

# Node
node_modules/
dist/
coverage/

# Environment
.env
.env.*
!.env.example

# Data artifacts
ml/data/raw/*
ml/data/processed/*
!ml/data/raw/.gitkeep
!ml/data/processed/.gitkeep

# MLflow and logs
mlruns/
*.log

# OS / Editor
.DS_Store
.vscode/
.idea/
GITIGNORE_EOF

# Write .env.example
cat > .env.example << 'ENV_EOF'
# Frontend
VITE_API_BASE_URL=http://localhost:8000/api/v1
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Backend
APP_NAME=NiftyPulse AI
APP_ENV=development
APP_HOST=0.0.0.0
APP_PORT=8000
SECRET_KEY=change_me
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_JWT_SECRET=your_supabase_jwt_secret
DATABASE_URL=postgresql+psycopg2://postgres:postgres@localhost:5432/niftypulse
REDIS_URL=redis://localhost:6379/0
MLFLOW_TRACKING_URI=http://localhost:5000
ENV_EOF


git add .

git commit -m "chore: initial project scaffold"

cat << 'NEXT_STEPS'

Scaffold complete.

Next steps to push to GitHub:
1) Create remote repo and connect it
   git branch -M main
   git remote add origin https://github.com/<owner>/niftypulse-ai.git
   git push -u origin main

2) Authenticate GitHub CLI if needed
   gh auth login

3) Create labels, milestones, and issues from generated docs
   - Labels reference: docs/github/labels.md
   - Milestones reference: docs/github/milestones.md
   - Issues reference: docs/github/issues.md

Suggested gh workflow:
- Parse each markdown table/section and run:
  gh label create "<name>" --color "<hex_without_#>" --description "<description>"
  gh api repos/<owner>/niftypulse-ai/milestones -f title="<title>" -f description="<desc>" -f due_on="<ISO8601>"
  gh issue create --title "<issue title>" --body-file <issue_body.md> --label "label1,label2" --milestone "<milestone>"

Tip: use a small helper script to convert docs/github/issues.md blocks into per-issue markdown files before running gh issue create.

NEXT_STEPS
