# Yatzy Refactoring Kata

A refactoring exercise where you improve poorly written code for the dice game Yatzy (similar to Yahtzee). The code intentionally contains bugs, code smells, and design issues for you to discover and fix.

## Available Languages

Choose your preferred language and follow the instructions in its directory:

- **[Java](java/)** - Maven + JUnit 5
- **[JavaScript](javascript/)** - Jest with object destructuring
- **[Python](python/)** - pytest
- **[TypeScript](typescript/)** - Jest + ts-jest
- **[Ruby](ruby/)** - Test::Unit (original version)

Each implementation contains the same bugs and code smells, just expressed in that language's idioms.

## Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd yatzy_refactoring

# Choose your language and follow its README
cd java          # or javascript, python, typescript, ruby
```

## What to Refactor

The code intentionally has several issues:

1. **Bugs** - Logic errors that cause tests to fail
2. **Duplication** - Repetitive code patterns
3. **Poor naming** - Confusing variable and method names
4. **Inconsistency** - Mixed method signatures and styles
5. **Complexity** - Overly complicated logic

Your goal is to make the code clean, maintainable, and correct while keeping all tests passing.

---

## Yatzy Game Rules

The game of Yatzy is a simple dice game. Each player rolls five six-sided dice. They can re-roll some or all of the dice up to three times (including the original roll).

**Your task**: Score a GIVEN roll in a GIVEN category. You do NOT have to program the dice rolling or game flow.

### Example Roll Sequence

A player rolls:
```
3, 4, 5, 5, 2
```

They hold `(-,-,5,5,-)` and re-roll `(3,4,-,-,2)`:
```
5, 1, 5, 5, 3
```

They hold `(5,-,5,5,-)` and re-roll `(-,1,-,-,3)`:
```
5, 6, 5, 5, 2
```

The player then places this roll in a category for scoring.

## Scoring Categories

### Chance
The sum of all dice, no matter what they read.

**Examples:**
- `1,1,3,3,6` → 14 (1+1+3+3+6)
- `4,5,5,6,1` → 21 (4+5+5+6+1)

### Yatzy
All five dice showing the same number scores 50 points.

**Examples:**
- `1,1,1,1,1` → 50
- `1,1,1,2,1` → 0

### Ones, Twos, Threes, Fours, Fives, Sixes
The sum of dice showing the specified number.

**Examples:**
- `1,1,2,4,4` on "fours" → 8 (4+4)
- `2,3,2,5,1` on "twos" → 4 (2+2)
- `3,3,3,4,5` on "ones" → 0

### Pair
The sum of the two highest matching dice.

**Examples:**
- `3,3,3,4,4` → 8 (4+4)
- `1,1,6,2,6` → 12 (6+6)
- `3,3,3,4,1` → 6 (3+3)

### Two Pairs
If there are two pairs, the sum of all four dice.

**Examples:**
- `1,1,2,3,3` → 8 (1+1+3+3)
- `1,1,2,3,4` → 0
- `1,1,2,2,2` → 6 (1+1+2+2)

### Three of a Kind
If there are three dice with the same number, the sum of those three dice.

**Examples:**
- `3,3,3,4,5` → 9 (3+3+3)
- `3,3,4,5,6` → 0
- `3,3,3,3,1` → 9 (3+3+3)

### Four of a Kind
If there are four dice with the same number, the sum of those four dice.

**Examples:**
- `2,2,2,2,5` → 8 (2+2+2+2)
- `2,2,2,5,5` → 0
- `2,2,2,2,2` → 8 (2+2+2+2)

### Small Straight
The sequence 1,2,3,4,5 scores 15 (the sum of all dice).

**Examples:**
- `1,2,3,4,5` → 15
- `2,3,4,5,1` → 15
- `1,2,2,4,5` → 0

### Large Straight
The sequence 2,3,4,5,6 scores 20 (the sum of all dice).

**Examples:**
- `6,2,3,4,5` → 20
- `2,3,4,5,6` → 20
- `1,2,2,4,5` → 0

### Full House
Two of one kind and three of another scores the sum of all five dice.

**Examples:**
- `1,1,2,2,2` → 8 (1+1+2+2+2)
- `2,2,3,3,4` → 0
- `4,4,4,4,4` → 0

## Resources

- Practice your refactoring skills and improve the code quality!
