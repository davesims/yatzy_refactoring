# Yatzy Refactoring Kata - Java

## Prerequisites

- JDK 11 or higher
- Maven

## Getting Started

### Run Tests

```bash
mvn test                    # Run all tests
mvn clean test              # Clean and run tests
```

### Project Structure

```
java/
├── pom.xml                           # Maven configuration
├── src/
│   ├── main/java/com/yatzy/
│   │   └── Yatzy.java               # Main implementation
│   └── test/java/com/yatzy/
│       └── YatzyTest.java           # JUnit 5 tests
```

## About This Exercise

This code intentionally contains bugs and code smells. Your task is to:
1. Identify and fix the bugs
2. Refactor the code to improve its design
3. Eliminate duplication and improve readability

Look for:
- Inconsistent method signatures
- Repetitive code patterns
- Logic errors in calculations
- Poor variable naming

See the [main README](../README.md) for full game rules and scoring details.
