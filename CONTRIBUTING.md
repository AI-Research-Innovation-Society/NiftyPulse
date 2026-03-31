# Contributing Guide

## Branch Naming
- `feature/your-feature-name`
- `fix/bug-description`
- `frontend/component-name`
- `backend/endpoint-name`
- `ml/model-or-pipeline-name`
- `docs/what-you-documented`
- `devops/task-name`

## Workflow
1. Pick an issue and comment "I'd like to work on this"
2. You will be assigned the issue by the maintainer
3. Branch from `dev`
4. Make changes with clear commits
5. Open a Pull Request → `dev`
6. Wait for 1 reviewer approval
7. Maintainer merges

## Commit Message Format
- `feat: add RSI signal computation`
- `fix: handle missing yfinance data`
- `ml: add XGBoost model for pattern detection`
- `frontend: add stock chart component`
- `backend: create stocks API endpoint`
- `docs: update architecture diagram`
- `devops: add docker-compose config`

## Never commit
- API keys or .env files
- Raw market data files
- Jupyter notebook outputs
- node_modules/
- __pycache__/
- .env (use .env.example instead)
