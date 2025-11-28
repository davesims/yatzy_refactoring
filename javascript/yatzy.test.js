const { Yatzy } = require('./yatzy');

describe('Yatzy', () => {
  test('chance scores sum of all dice', () => {
    const expected = 15;
    const actual = Yatzy.chance({d1: 2, d2: 3, d3: 4, d4: 5, d5: 1});
    expect(actual).toBe(expected);
    expect(Yatzy.chance({d1: 3, d2: 3, d3: 4, d4: 5, d5: 1})).toBe(16);
  });

  test('yatzy scores 50', () => {
    const expected = 50;
    const actual = Yatzy.yatzy([4, 4, 4, 4, 4]);
    expect(actual).toBe(expected);
    expect(Yatzy.yatzy([6, 6, 6, 6, 6])).toBe(50);
    expect(Yatzy.yatzy([6, 6, 6, 6, 3])).toBe(0);
  });

  test('1s', () => {
    expect(Yatzy.ones({d1: 1, d2: 2, d3: 3, d4: 4, d5: 5})).toBe(1);
    expect(Yatzy.ones({d1: 1, d2: 2, d3: 1, d4: 4, d5: 5})).toBe(2);
    expect(Yatzy.ones({d1: 6, d2: 2, d3: 2, d4: 4, d5: 5})).toBe(0);
    expect(Yatzy.ones({d1: 1, d2: 2, d3: 1, d4: 1, d5: 1})).toBe(4);
  });

  test('2s', () => {
    expect(Yatzy.twos({d1: 1, d2: 2, d3: 3, d4: 2, d5: 6})).toBe(4);
    expect(Yatzy.twos({d1: 2, d2: 2, d3: 2, d4: 2, d5: 2})).toBe(10);
  });

  test('threes', () => {
    expect(Yatzy.threes({d1: 1, d2: 2, d3: 3, d4: 2, d5: 3})).toBe(6);
    expect(Yatzy.threes({d1: 2, d2: 3, d3: 3, d4: 3, d5: 3})).toBe(12);
  });

  test('fours test', () => {
    expect(new Yatzy({d1: 4, d2: 4, d3: 4, d4: 5, d5: 5}).fours()).toBe(12);
    expect(new Yatzy({d1: 4, d2: 4, d3: 5, d4: 5, d5: 5}).fours()).toBe(8);
    expect(new Yatzy({d1: 4, d2: 5, d3: 5, d4: 5, d5: 5}).fours()).toBe(4);
  });

  test('fives', () => {
    expect(new Yatzy({d1: 4, d2: 4, d3: 4, d4: 5, d5: 5}).fives()).toBe(10);
    expect(new Yatzy({d1: 4, d2: 4, d3: 5, d4: 5, d5: 5}).fives()).toBe(15);
    expect(new Yatzy({d1: 4, d2: 5, d3: 5, d4: 5, d5: 5}).fives()).toBe(20);
  });

  test('sixes test', () => {
    expect(new Yatzy({d1: 4, d2: 4, d3: 4, d4: 5, d5: 5}).sixes()).toBe(0);
    expect(new Yatzy({d1: 4, d2: 4, d3: 6, d4: 5, d5: 5}).sixes()).toBe(6);
    expect(new Yatzy({d1: 6, d2: 5, d3: 6, d4: 6, d5: 5}).sixes()).toBe(18);
  });

  test('one pair', () => {
    expect(Yatzy.score_pair({d1: 3, d2: 4, d3: 3, d4: 5, d5: 6})).toBe(6);
    expect(Yatzy.score_pair({d1: 5, d2: 3, d3: 3, d4: 3, d5: 5})).toBe(10);
    expect(Yatzy.score_pair({d1: 5, d2: 5, d3: 3, d4: 3, d5: 5})).toBe(10);
    expect(Yatzy.score_pair({d1: 5, d2: 3, d3: 6, d4: 6, d5: 5})).toBe(12);
  });

  test('two Pair', () => {
    expect(Yatzy.two_pair({d1: 3, d2: 3, d3: 5, d4: 4, d5: 5})).toBe(16);
    expect(Yatzy.two_pair({d1: 3, d2: 3, d3: 5, d4: 5, d5: 5})).toBe(16);
  });

  test('three of a kind', () => {
    expect(Yatzy.three_of_a_kind({d1: 3, d2: 3, d3: 3, d4: 4, d5: 5})).toBe(9);
    expect(Yatzy.three_of_a_kind({d1: 5, d2: 3, d3: 5, d4: 4, d5: 5})).toBe(15);
    expect(Yatzy.three_of_a_kind({d1: 3, d2: 3, d3: 3, d4: 3, d5: 5})).toBe(9);
  });

  test('four of a knd', () => {
    expect(Yatzy.four_of_a_kind({d1: 3, d2: 3, d3: 3, d4: 3, d5: 5})).toBe(12);
    expect(Yatzy.four_of_a_kind({d1: 5, d2: 5, d3: 5, d4: 4, d5: 5})).toBe(20);
    expect(Yatzy.three_of_a_kind({d1: 3, d2: 3, d3: 3, d4: 3, d5: 3})).toBe(9);
    expect(Yatzy.four_of_a_kind({d1: 3, d2: 3, d3: 3, d4: 3, d5: 3})).toBe(12);
  });

  test('smallStraight', () => {
    expect(Yatzy.smallStraight({d1: 1, d2: 2, d3: 3, d4: 4, d5: 5})).toBe(15);
    expect(Yatzy.smallStraight({d1: 2, d2: 3, d3: 4, d4: 5, d5: 1})).toBe(15);
    expect(Yatzy.smallStraight({d1: 1, d2: 2, d3: 2, d4: 4, d5: 5})).toBe(0);
  });

  test('largeStraight', () => {
    expect(Yatzy.largeStraight({d1: 6, d2: 2, d3: 3, d4: 4, d5: 5})).toBe(20);
    expect(Yatzy.largeStraight({d1: 2, d2: 3, d3: 4, d4: 5, d5: 6})).toBe(20);
    expect(Yatzy.largeStraight({d1: 1, d2: 2, d3: 2, d4: 4, d5: 5})).toBe(0);
  });

  test('fullHouse', () => {
    expect(Yatzy.fullHouse({d1: 6, d2: 2, d3: 2, d4: 2, d5: 6})).toBe(18);
    expect(Yatzy.fullHouse({d1: 2, d2: 3, d3: 4, d4: 5, d5: 6})).toBe(0);
    expect(Yatzy.fullHouse({d1: 3, d2: 3, d3: 3, d4: 1, d5: 5})).toBe(0);
    expect(Yatzy.fullHouse({d1: 4, d2: 4, d3: 4, d4: 4, d5: 4})).toBe(0);
  });
});
