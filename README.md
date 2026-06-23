# Gocolors

Playwright TypeScript automation for the [Go Colors](https://gocolors.com) website.

## What it does

- Opens the Go Colors homepage in Chrome
- Verifies the URL and page title
- Runs automatically on every **git push** and **daily at 5:00 PM IST** via GitHub Actions

## Project structure

```
Gocolors/
├── tests/
│   └── gocolors.spec.ts    # Playwright test specs
├── .github/workflows/
│   └── playwright.yml      # CI: push + scheduled runs
├── playwright.config.ts    # Playwright settings
├── package.json
└── tsconfig.json
```

## Setup

**Requirements:** Node.js 18+, Google Chrome (for local runs)

```bash
npm install
npx playwright install
```

### Windows (PowerShell)

If `npm` is not recognized, add Node.js to PATH:

```powershell
$env:Path = "C:\Program Files\nodejs;" + $env:Path
```

If PowerShell blocks `npm.ps1`, use `npm.cmd` instead:

```powershell
npm.cmd test
```

Or run `.\run.bat` from the project folder.

## Run tests locally

```bash
npm test
```

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests |
| `npm run automate` | Same as `npm test` |
| `npm run test:headed` | Run with browser visible |
| `npm run test:ui` | Playwright interactive UI |
| `npm run report` | Open last HTML report |

## CI/CD (GitHub Actions)

Tests run automatically in two cases:

1. **On every push** to any branch
2. **Daily at 5:00 PM IST** (11:30 UTC)

View runs: [GitHub Actions](https://github.com/rutvipatel1393/Gocolors/actions)

Failed runs upload a Playwright HTML report as a downloadable artifact.

## Configuration

- **Local:** uses installed Google Chrome (`channel: 'chrome'`), headed mode
- **CI:** uses headless Chromium (no display on GitHub runners)

Settings are in `playwright.config.ts`.

## Repository

https://github.com/rutvipatel1393/Gocolors
