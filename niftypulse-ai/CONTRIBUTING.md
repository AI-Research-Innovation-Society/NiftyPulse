# Contributing to NiftyPulse AI

Thank you for contributing. NiftyPulse AI is built as a student-collaborative open-source programme, so predictable workflows and clean handoffs are critical.

## 1. Fork and Clone

```bash
# 1) Fork on GitHub first, then:
git clone https://github.com/<your-username>/niftypulse-ai.git
cd niftypulse-ai

# 2) Add upstream remote
git remote add upstream https://github.com/<org-or-owner>/niftypulse-ai.git
```

Keep your fork updated:

```bash
git checkout main
git pull upstream main
git push origin main
```

## 2. Branch Naming Convention

Create one branch per issue using these prefixes:

- `feat/issue-{number}-short-description`
- `fix/issue-{number}-short-description`
- `docs/issue-{number}-short-description`
- `data/issue-{number}-short-description`
- `ml/issue-{number}-short-description`

Examples:
- `feat/issue-33-macd-calculator`
- `data/issue-20-bse-shareholding-scraper`
- `docs/issue-7-readme-first-draft`

## 3. Commit Message Convention

Use Conventional Commits format:

```text
type(scope): short summary
```

Common types:
- `feat`
- `fix`
- `docs`
- `refactor`
- `test`
- `chore`

Examples:
- `feat(signal): add RSI overbought/oversold detector`
- `fix(api): validate symbol path parameter`
- `docs(readme): add docker setup troubleshooting`

## 4. Picking Up an Issue

1. Open the issue and confirm no one is already assigned.
2. Comment: `I'd like to work on this.`
3. Wait for maintainer assignment/acknowledgment.
4. Create your branch from `main` and begin work.

Only work on issues assigned to you unless a maintainer asks otherwise.

## 5. Pull Request Process

1. Push your branch to your fork.
2. Open a PR to `main`.
3. Link the issue in PR description (`Closes #<issue_number>`).
4. Ensure CI passes before requesting review.

### PR Checklist

- [ ] I linked the related issue in the PR
- [ ] I kept the change scope limited to the assigned issue
- [ ] I added/updated tests where required
- [ ] I ran local checks (lint/tests/build)
- [ ] I updated docs for behavior/config changes
- [ ] I verified SEBI-safe language (no buy/sell advice)
- [ ] I requested review from the correct area maintainer

## 6. Code Style Guide

### Python (Backend / ML)
- Formatter: **Black**
- Linting: (recommended) Ruff/Flake8 if configured
- Testing: `pytest`
- Keep functions typed and modular
- Avoid hardcoding secrets or environment-specific paths

### JavaScript/TypeScript (Frontend)
- Linting: **ESLint**
- Formatting: **Prettier**
- Testing: **Vitest**
- Prefer reusable components and hooks
- Keep API calls centralized in `frontend/src/services`

## 7. Labels and Prioritization

Each issue should include labels across four dimensions:

- Area: `area: frontend`, `area: backend`, `area: ml`, `area: data`, `area: mlops`, `area: docs`, `area: devops`
- Type: `type: feature`, `type: bug`, `type: chore`, `type: research`
- Difficulty: `difficulty: beginner`, `difficulty: intermediate`, `difficulty: advanced`
- Status: `status: open`, `status: in-progress`, `status: blocked`, `status: needs-review`

Special routing labels:
- `good first issue`
- `help wanted`
- `priority: high`

Prioritization guidance:
- `priority: high` for blocking platform-critical tasks
- `good first issue` for onboarding-friendly, low-risk tasks
- `help wanted` when parallel contributors are beneficial

## 8. Collaboration Rules

- Keep PRs small and atomic.
- Do not combine unrelated changes in one PR.
- Raise blockers early in issue comments.
- Be respectful in code reviews and provide actionable feedback.

## 9. Compliance and Responsible Framing

NiftyPulse AI is an educational project. Contributors must avoid language that can be interpreted as personalized investment advice. If you change user-facing text, cross-check with `docs/sebi-compliance.md`.

## 10. Need Help?

- Ask in the issue thread first for visibility.
- Tag maintainers with specific technical questions.
- If requirements are unclear, request clarification before implementation.
