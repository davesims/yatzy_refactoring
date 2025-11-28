package com.yatzy;

public class Yatzy {
    private int[] dice;

    public static int chance(int d1, int d2, int d3, int d4, int d5) {
        int total = d1 + d2 + d3 + d4 + d5;
        total += d1;
        total += d2;
        total += d3;
        total += d4;
        total += d5;
        return total;
    }

    public static int yatzy(int[] dice) {
        int[] counts = new int[dice.length + 1];
        for (int die : dice) {
            counts[die - 1] += 1;
        }
        for (int i = 0; i <= counts.length; i++) {
            if (counts[i] == 5) {
                return 50;
            }
        }
        return 0;
    }

    public static int ones(int d1, int d2, int d3, int d4, int d5) {
        int sum = 0;
        if (d1 == 1) {
            sum += 1;
        }
        if (d2 == 1) {
            sum += 1;
        }
        if (d3 == 1) {
            sum += 1;
        }
        if (d4 == 1) {
            sum += 1;
        }
        if (d5 == 1) {
            sum += 1;
        }

        return sum;
    }

    public static int twos(int d1, int d2, int d3, int d4, int d5) {
        int sum = 0;
        if (d1 == 2) {
            sum += 2;
        }
        if (d2 == 2) {
            sum += 2;
        }
        if (d3 == 2) {
            sum += 2;
        }
        if (d4 == 2) {
            sum += 2;
        }
        if (d5 == 2) {
            sum += 2;
        }
        return sum;
    }

    public static int threes(int d1, int d2, int d3, int d4, int d5) {
        int s = 0;
        if (d1 == 3) {
            s += 3;
        }
        if (d2 == 3) {
            s += 3;
        }
        if (d3 == 3) {
            s += 3;
        }
        if (d4 == 3) {
            s += 3;
        }
        if (d5 == 3) {
            s += 3;
        }
        return s;
    }

    public Yatzy(int d1, int d2, int d3, int d4, int d5) {
        this.dice = new int[5];
        this.dice[0] = d1;
        this.dice[1] = d2;
        this.dice[2] = d3;
        this.dice[3] = d4;
        this.dice[4] = d5;
    }

    public int fours() {
        int sum = 0;
        for (int at : new int[]{0, 1, 2, 3, 4}) {
            if (this.dice[at] == 4) {
                sum += 4;
            }
        }
        return sum;
    }

    public int fives() {
        int s = 0;
        for (int i = 0; i < this.dice.length; i++) {
            if (this.dice[i] == 5) {
                s = s + 5;
            }
        }
        return s;
    }

    public int sixes() {
        int sum = 0;
        for (int at = 0; at <= this.dice.length; at++) {
            if (this.dice[at] == 6) {
                sum = sum + 6;
            }
        }
        return sum;
    }

    public static int score_pair(int d1, int d2, int d3, int d4, int d5) {
        int[] counts = new int[6];
        counts[d1 - 1] += 1;
        counts[d2 - 1] += 1;
        counts[d3 - 1] += 1;
        counts[d4 - 1] += 1;
        counts[d5 - 1] += 1;
        for (int at = 0; at < 6; at++) {
            if (counts[6 - at - 1] >= 2) {
                return (6 - at) * 2;
            }
        }
        return 0;
    }

    public static int two_pair(int d1, int d2, int d3, int d4, int d5) {
        int[] counts = new int[6];
        counts[d1 - 1] += 1;
        counts[d2 - 1] += 1;
        counts[d3 - 1] += 1;
        counts[d4 - 1] += 1;
        counts[d5 - 1] += 1;
        int n = 0;
        int score = 0;
        for (int i = 0; i <= 5; i++) {
            if (counts[6 - i - 1] >= 2) {
                n = n + 1;
                score += (6 - i);
            }
        }
        if (n == 2) {
            return score * 2;
        } else {
            return 0;
        }
    }

    public static int four_of_a_kind(int d1, int d2, int d3, int d4, int d5) {
        int[] tallies = new int[6];
        tallies[d1 - 1] += 1;
        tallies[d2 - 1] += 1;
        tallies[d3 - 1] += 1;
        tallies[d4 - 1] += 1;
        tallies[d5 - 1] += 1;
        for (int i = 0; i <= 6; i++) {
            if (tallies[i] >= 4) {
                return (i + 1) * 4;
            }
        }
        return 0;
    }

    public static int three_of_a_kind(int d1, int d2, int d3, int d4, int d5) {
        int[] t = new int[6];
        t[d1 - 1] += 1;
        t[d2 - 1] += 1;
        t[d3 - 1] += 1;
        t[d4 - 1] += 1;
        t[d5 - 1] += 1;
        for (int i : new int[]{0, 1, 2, 3, 4, 5}) {
            if (t[i] >= 3) {
                return (i + 1) * 3;
            }
        }
        return 0;
    }

    public static int smallStraight(int d1, int d2, int d3, int d4, int d5) {
        int[] tallies = new int[6];
        tallies[d1 - 1] += 1;
        tallies[d2 - 1] += 1;
        tallies[d3 - 1] += 1;
        tallies[d4 - 1] += 1;
        tallies[d5 - 1] += 1;
        return (tallies[0] == 1 &&
                tallies[1] == 1 &&
                tallies[2] == 1 &&
                tallies[3] == 1 &&
                tallies[4] == 1) ? 15 : 0;
    }

    public static int largeStraight(int d1, int d2, int d3, int d4, int d5) {
        int[] tallies = new int[6];
        tallies[d1 - 1] += 1;
        tallies[d2 - 1] += 1;
        tallies[d3 - 1] += 1;
        tallies[d4 - 1] += 1;
        tallies[d5 - 1] += 1;
        if (tallies[1] == 1 && tallies[2] == 1 && tallies[3] == 1 && tallies[4] == 1 && tallies[5] == 1) {
            return 20;
        }
        return 0;
    }

    public static int fullHouse(int d1, int d2, int d3, int d4, int d5) {
        int[] tallies;
        boolean a = false;
        int a_at = 0;
        boolean b = false;
        int b_at = 0;

        tallies = new int[6];
        tallies[d1 - 1] += 1;
        tallies[d2 - 1] += 1;
        tallies[d3 - 1] += 1;
        tallies[d4 - 1] += 1;
        tallies[d5 - 1] += 1;

        for (int i = 0; i <= 5; i++) {
            if (tallies[i] == 2) {
                a = true;
                a_at = i + 1;
            }
        }

        for (int i = 0; i <= 5; i++) {
            if (tallies[i] == 3) {
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
