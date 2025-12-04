# Yatzy Refactoring Kata - Ruby

## Prerequisites

- Ruby 2.7 or higher
- gem (Ruby package manager)

### Setting Up Ruby

**macOS/Linux:**
```bash
# Using asdf
asdf install ruby 3.4.7
asdf local ruby 3.4.7

# OR using rbenv
rbenv install 3.4.7
rbenv local 3.4.7

# OR using system Ruby
ruby --version
gem --version
```

**Windows:**
- Download [RubyInstaller](https://rubyinstaller.org/)
- Verify: `ruby --version` and `gem --version`

## Getting Started

### Install Dependencies

```bash
gem install test-unit
```

### Run Tests

```bash
ruby test_yatzy.rb
```

### Project Structure

```
ruby/
├── yatzy.rb               # Main implementation
└── test_yatzy.rb          # Test::Unit tests
```

## About This Exercise

This is the **original** version of the Yatzy Refactoring Kata. The code intentionally contains bugs and code smells. Your task is to:
1. Identify and fix the bugs
2. Refactor the code to improve its design
3. Eliminate duplication and improve readability

Look for:
- Inconsistent method signatures (class methods vs instance methods)
- Repetitive code patterns
- Logic errors in calculations
- Poor variable naming (e.g., `a`, `di`)
- Mixed parameter styles

See the [main README](../README.md) for full game rules and scoring details.
