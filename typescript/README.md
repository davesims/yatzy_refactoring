# Yatzy Refactoring Kata - TypeScript

## Prerequisites

- Node.js 14 or higher
- npm

### Setting Up Node.js

**macOS:**
```bash
brew install node
```

**Linux:**
```bash
# Using NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Windows:**
- Download from [nodejs.org](https://nodejs.org/)
- Or use [nvm-windows](https://github.com/coreybutler/nvm-windows)
- Verify: `node --version` and `npm --version`

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
npm test                    # Run all tests
npm run test:watch          # Run tests in watch mode
npm run build               # Compile TypeScript
```

### Project Structure

```
typescript/
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── jest.config.js          # Jest configuration
├── yatzy.ts               # Main implementation
└── yatzy.test.ts          # Jest tests
```

## About This Exercise

This code intentionally contains bugs and code smells. Your task is to:
1. Identify and fix the bugs
2. Refactor the code to improve its design
3. Eliminate duplication and improve readability

Look for:
- Inconsistent method signatures (individual params vs arrays)
- Repetitive code patterns
- Logic errors in calculations
- Mixed static and instance methods
- Array index out of bounds issues

**Note:** TypeScript's type system helps catch some errors, but plenty of bugs and design issues remain!

See the [main README](../README.md) for full game rules and scoring details.
