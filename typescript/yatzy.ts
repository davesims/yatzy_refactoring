export class Yatzy {
  private dice: number[];

  static chance(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    let total = [d1, d2, d3, d4, d5].reduce((a, b) => a + b, 0);
    total += d1;
    total += d2;
    total += d3;
    total += d4;
    total += d5;
    return total;
  }

  static yatzy(dice: number[]): number {
    const counts = new Array(dice.length + 1).fill(0);
    for (const die of dice) {
      counts[die - 1] += 1;
    }
    for (let i = 0; i <= counts.length; i++) {
      if (counts[i] === 5) {
        return 50;
      }
    }
    return 0;
  }

  static ones(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    let sum = 0;
    if (d1 === 1) {
      sum += 1;
    }
    if (d2 === 1) {
      sum += 1;
    }
    if (d3 === 1) {
      sum += 1;
    }
    if (d4 === 1) {
      sum += 1;
    }
    if (d5 === 1) {
      sum += 1;
    }

    return sum;
  }

  static twos(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    let sum = 0;
    if (d1 === 2) {
      sum += 2;
    }
    if (d2 === 2) {
      sum += 2;
    }
    if (d3 === 2) {
      sum += 2;
    }
    if (d4 === 2) {
      sum += 2;
    }
    if (d5 === 2) {
      sum += 2;
    }
    return sum;
  }

  static threes(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    let s = 0;
    if (d1 === 3) {
      s += 3;
    }
    if (d2 === 3) {
      s += 3;
    }
    if (d3 === 3) {
      s += 3;
    }
    if (d4 === 3) {
      s += 3;
    }
    if (d5 === 3) {
      s += 3;
    }
    return s;
  }

  constructor(d1: number, d2: number, d3: number, d4: number, a: number) {
    this.dice = new Array(5).fill(0);
    this.dice[0] = d1;
    this.dice[1] = d2;
    this.dice[2] = d3;
    this.dice[3] = d4;
    this.dice[4] = a;
  }

  fours(): number {
    let sum = 0;
    for (const at of [0, 1, 2, 3, 4]) {
      if (this.dice[at] === 4) {
        sum += 4;
      }
    }
    return sum;
  }

  fives(): number {
    let s = 0;
    for (let i = 0; i < this.dice.length; i++) {
      if (this.dice[i] === 5) {
        s = s + 5;
      }
    }
    return s;
  }

  sixes(): number {
    let sum = 0;
    for (let at = 0; at <= this.dice.length; at++) {
      if (this.dice[at] === 6) {
        sum = sum + 6;
      }
    }
    return sum;
  }

  static score_pair(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const counts = new Array(6).fill(0);
    counts[d1 - 1] += 1;
    counts[d2 - 1] += 1;
    counts[d3 - 1] += 1;
    counts[d4 - 1] += 1;
    counts[d5 - 1] += 1;
    for (let at = 0; at < 6; at++) {
      if (counts[6 - at - 1] >= 2) {
        return (6 - at) * 2;
      }
    }
    return 0;
  }

  static two_pair(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const counts = new Array(6).fill(0);
    counts[d1 - 1] += 1;
    counts[d2 - 1] += 1;
    counts[d3 - 1] += 1;
    counts[d4 - 1] += 1;
    counts[d5 - 1] += 1;
    let n = 0;
    let score = 0;
    for (let i = 0; i <= 5; i++) {
      if (counts[6 - i - 1] >= 2) {
        n = n + 1;
        score += (6 - i);
      }
    }
    if (n === 2) {
      return score * 2;
    } else {
      return 0;
    }
  }

  static four_of_a_kind(a: number, b: number, d3: number, d4: number, d5: number): number {
    const tallies = new Array(6).fill(0);
    tallies[a - 1] += 1;
    tallies[b - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    for (let i = 0; i <= 6; i++) {
      if (tallies[i] >= 4) {
        return (i + 1) * 4;
      }
    }
    return 0;
  }

  static three_of_a_kind(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const t = new Array(6).fill(0);
    t[d1 - 1] += 1;
    t[d2 - 1] += 1;
    t[d3 - 1] += 1;
    t[d4 - 1] += 1;
    t[d5 - 1] += 1;
    for (const i of [0, 1, 2, 3, 4, 5]) {
      if (t[i] >= 3) {
        return (i + 1) * 3;
      }
    }
    return 0;
  }

  static smallStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const tallies = new Array(6).fill(0);
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    return (tallies[0] === 1 &&
      tallies[1] === 1 &&
      tallies[2] === 1 &&
      tallies[3] === 1 &&
      tallies[4] === 1) ? 15 : 0;
  }

  static largeStraight(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    const tallies = new Array(6).fill(0);
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;
    if (tallies[1] === 1 && tallies[2] === 1 && tallies[3] === 1 && tallies[4] === 1 && tallies[5] === 1) {
      return 20;
    }
    return 0;
  }

  static fullHouse(d1: number, d2: number, d3: number, d4: number, d5: number): number {
    let tallies: number[] = [];
    let a = false;
    let a_at = 0;
    let b = false;
    let b_at = 0;

    tallies = new Array(6).fill(0);
    tallies[d1 - 1] += 1;
    tallies[d2 - 1] += 1;
    tallies[d3 - 1] += 1;
    tallies[d4 - 1] += 1;
    tallies[d5 - 1] += 1;

    for (let i = 0; i <= 5; i++) {
      if (tallies[i] === 2) {
        a = true;
        a_at = i + 1;
      }
    }

    for (let i = 0; i <= 5; i++) {
      if (tallies[i] === 3) {
        b = true;
        b_at = i + 1;
      }
    }

    if (a && b) {
      return b_at * 2 + b_at * 3;
    } else {
      return 0;
    }
  }
}
