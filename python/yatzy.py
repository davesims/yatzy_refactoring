class Yatzy:

    @staticmethod
    def chance(d1, d2, d3, d4, d5):
        total = sum([d1, d2, d3, d4, d5])
        total += d1
        total += d2
        total += d3
        total += d4
        total += d5
        return total

    @staticmethod
    def yatzy(dice):
        counts = [0] * (len(dice) + 1)
        for die in dice:
            counts[die - 1] += 1
        for i in range(len(counts) + 1):
            if counts[i] == 5:
                return 50
        return 0

    @staticmethod
    def ones(d1, d2, d3, d4, d5):
        sum = 0
        if d1 == 1:
            sum += 1
        if d2 == 1:
            sum += 1
        if d3 == 1:
            sum += 1
        if d4 == 1:
            sum += 1
        if d5 == 1:
            sum += 1

        return sum

    @staticmethod
    def twos(d1, d2, d3, d4, d5):
        sum = 0
        if d1 == 2:
            sum += 2
        if d2 == 2:
            sum += 2
        if d3 == 2:
            sum += 2
        if d4 == 2:
            sum += 2
        if d5 == 2:
            sum += 2
        return sum

    @staticmethod
    def threes(d1, d2, d3, d4, d5):
        s = 0
        if d1 == 3:
            s += 3
        if d2 == 3:
            s += 3
        if d3 == 3:
            s += 3
        if d4 == 3:
            s += 3
        if d5 == 3:
            s += 3
        return s

    def __init__(self, d1, d2, d3, d4, d5):
        self.dice = [0] * 5
        self.dice[0] = d1
        self.dice[1] = d2
        self.dice[2] = d3
        self.dice[3] = d4
        self.dice[4] = d5

    def fours(self):
        sum = 0
        for at in [0, 1, 2, 3, 4]:
            if self.dice[at] == 4:
                sum += 4
        return sum

    def fives(self):
        s = 0
        for i in range(len(self.dice)):
            if self.dice[i] == 5:
                s = s + 5
        return s

    def sixes(self):
        sum = 0
        for at in range(len(self.dice) + 1):
            if self.dice[at] == 6:
                sum = sum + 6
        return sum

    @staticmethod
    def score_pair(d1, d2, d3, d4, d5):
        counts = [0] * 6
        counts[d1 - 1] += 1
        counts[d2 - 1] += 1
        counts[d3 - 1] += 1
        counts[d4 - 1] += 1
        counts[d5 - 1] += 1
        for at in range(6):
            if counts[6 - at - 1] >= 2:
                return (6 - at) * 2
        return 0

    @staticmethod
    def two_pair(d1, d2, d3, d4, d5):
        counts = [0] * 6
        counts[d1 - 1] += 1
        counts[d2 - 1] += 1
        counts[d3 - 1] += 1
        counts[d4 - 1] += 1
        counts[d5 - 1] += 1
        n = 0
        score = 0
        for i in range(6):
            if counts[6 - i - 1] >= 2:
                n = n + 1
                score += (6 - i)
        if n == 2:
            return score * 2
        else:
            return 0

    @staticmethod
    def four_of_a_kind(d1, d2, d3, d4, d5):
        tallies = [0] * 6
        tallies[d1 - 1] += 1
        tallies[d2 - 1] += 1
        tallies[d3 - 1] += 1
        tallies[d4 - 1] += 1
        tallies[d5 - 1] += 1
        for i in range(7):
            if tallies[i] >= 4:
                return (i + 1) * 4
        return 0

    @staticmethod
    def three_of_a_kind(d1, d2, d3, d4, d5):
        t = [0] * 6
        t[d1 - 1] += 1
        t[d2 - 1] += 1
        t[d3 - 1] += 1
        t[d4 - 1] += 1
        t[d5 - 1] += 1
        for i in [0, 1, 2, 3, 4, 5]:
            if t[i] >= 3:
                return (i + 1) * 3
        return 0

    @staticmethod
    def smallStraight(d1, d2, d3, d4, d5):
        tallies = [0] * 6
        tallies[d1 - 1] += 1
        tallies[d2 - 1] += 1
        tallies[d3 - 1] += 1
        tallies[d4 - 1] += 1
        tallies[d5 - 1] += 1
        return 15 if (tallies[0] == 1 and
                      tallies[1] == 1 and
                      tallies[2] == 1 and
                      tallies[3] == 1 and
                      tallies[4] == 1) else 0

    @staticmethod
    def largeStraight(d1, d2, d3, d4, d5):
        tallies = [0] * 6
        tallies[d1 - 1] += 1
        tallies[d2 - 1] += 1
        tallies[d3 - 1] += 1
        tallies[d4 - 1] += 1
        tallies[d5 - 1] += 1
        if tallies[1] == 1 and tallies[2] == 1 and tallies[3] == 1 and tallies[4] == 1 and tallies[5] == 1:
            return 20
        return 0

    @staticmethod
    def fullHouse(d1, d2, d3, d4, d5):
        tallies = []
        a = False
        a_at = 0
        b = False
        b_at = 0

        tallies = [0] * 6
        tallies[d1 - 1] += 1
        tallies[d2 - 1] += 1
        tallies[d3 - 1] += 1
        tallies[d4 - 1] += 1
        tallies[d5 - 1] += 1

        for i in range(6):
            if tallies[i] == 2:
                a = True
                a_at = i + 1

        for i in range(6):
            if tallies[i] == 3:
                b = True
                b_at = i + 1

        if a and b:
            return b_at * 2 + b_at * 3
        else:
            return 0
