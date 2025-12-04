# Yatzy Refactoring Kata - Python

## Prerequisites

- Python 3.7 or higher
- pip

### Setting Up Python

**macOS/Linux:**
```bash
# Using asdf
asdf install python 3.11.0
asdf local python 3.11.0

# OR using pyenv
pyenv install 3.11.0
pyenv local 3.11.0

# OR using system Python
python3 --version
python3 -m pip --version
```

**Windows:**
- Download from [python.org](https://www.python.org/downloads/)
- Or use [pyenv-win](https://github.com/pyenv-win/pyenv-win)
- Verify: `python --version` and `pip --version`

## Getting Started

### Install Dependencies

#### Option 1: Direct Installation
```bash
pip install -r requirements.txt
```

#### Option 2: Using Virtual Environment (Recommended)
```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate        # On macOS/Linux
# or
venv\Scripts\activate           # On Windows

# Install dependencies
pip install -r requirements.txt
```

### Run Tests

```bash
pytest                          # Run all tests
pytest -v                       # Run tests in verbose mode
pytest --watch                  # Run tests in watch mode (requires pytest-watch)
```

### Project Structure

```
python/
├── requirements.txt            # Python dependencies
├── yatzy.py                   # Main implementation
└── test_yatzy.py              # pytest tests
```

## About This Exercise

This code intentionally contains bugs and code smells. Your task is to:
1. Identify and fix the bugs
2. Refactor the code to improve its design
3. Eliminate duplication and improve readability

Look for:
- Inconsistent parameter styles (positional args vs lists)
- Repetitive code patterns
- Logic errors in calculations
- Index out of bounds errors
- Poor variable naming (shadowing built-ins like `sum`)

See the [main README](../README.md) for full game rules and scoring details.
