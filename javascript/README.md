# Yatzy Refactoring Kata - JavaScript

## Prerequisites

- Node.js 14 or higher
- npm

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Tests

```bash
npm test                    # Run all tests
npm run test:watch          # Run tests in watch mode
```

### Project Structure

```
javascript/
├── package.json            # Dependencies and scripts
├── jest.config.js          # Jest configuration
├── yatzy.js               # Main implementation
└── yatzy.test.js          # Jest tests
```

## About This Exercise

This code intentionally contains bugs and code smells. Your task is to:
1. Identify and fix the bugs
2. Refactor the code to improve its design
3. Eliminate duplication and improve readability

Look for:
- Inconsistent parameter styles (objects vs arrays)
- Repetitive code patterns
- Logic errors in calculations
- Mixed static and instance methods

**Note:** This version uses object destructuring (`{d1, d2, d3, d4, d5}`) to simulate named parameters, creating an interesting mix with the array-based `yatzy()` method.

See the [main README](../README.md) for full game rules and scoring details.
