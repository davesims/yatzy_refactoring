import { Yatzy } from './yatzy';

describe('Yatzy', () => {
  test('chance scores sum of all dice', () => {
    const expected = 15;
    const actual = Yatzy.chance(2, 3, 4, 5, 1);
    expect(actual).toBe(expected);
    expect(Yatzy.chance(3, 3, 4, 5, 1)).toBe(16);
  });

  test('yatzy scores 50', () => {
    const expected = 50;
    const actual = Yatzy.yatzy([4, 4, 4, 4, 4]);
    expect(actual).toBe(expected);
    expect(Yatzy.yatzy([6, 6, 6, 6, 6])).toBe(50);
    expect(Yatzy.yatzy([6, 6, 6, 6, 3])).toBe(0);
  });

  test('1s', () => {
    expect(Yatzy.ones(1, 2, 3, 4, 5)).toBe(1);
    expect(Yatzy.ones(1, 2, 1, 4, 5)).toBe(2);
    expect(Yatzy.ones(6, 2, 2, 4, 5)).toBe(0);
    expect(Yatzy.ones(1, 2, 1, 1, 1)).toBe(4);
  });

  test('2s', () => {
    expect(Yatzy.twos(1, 2, 3, 2, 6)).toBe(4);
    expect(Yatzy.twos(2, 2, 2, 2, 2)).toBe(10);
  });

  test('threes', () => {
    expect(Yatzy.threes(1, 2, 3, 2, 3)).toBe(6);
    expect(Yatzy.threes(2, 3, 3, 3, 3)).toBe(12);
  });

  test('fours test', () => {
    expect(new Yatzy(4, 4, 4, 5, 5).fours()).toBe(12);
    expect(new Yatzy(4, 4, 5, 5, 5).fours()).toBe(8);
    expect(new Yatzy(4, 5, 5, 5, 5).fours()).toBe(4);
  });

  test('fives', () => {
    expect(new Yatzy(4, 4, 4, 5, 5).fives()).toBe(10);
    expect(new Yatzy(4, 4, 5, 5, 5).fives()).toBe(15);
    expect(new Yatzy(4, 5, 5, 5, 5).fives()).toBe(20);
  });

  test('sixes test', () => {
    expect(new Yatzy(4, 4, 4, 5, 5).sixes()).toBe(0);
    expect(new Yatzy(4, 4, 6, 5, 5).sixes()).toBe(6);
    expect(new Yatzy(6, 5, 6, 6, 5).sixes()).toBe(18);
  });

  test('one pair', () => {
    expect(Yatzy.score_pair(3, 4, 3, 5, 6)).toBe(6);
    expect(Yatzy.score_pair(5, 3, 3, 3, 5)).toBe(10);
    expect(Yatzy.score_pair(5, 5, 3, 3, 5)).toBe(10);
    expect(Yatzy.score_pair(5, 3, 6, 6, 5)).toBe(12);
  });

  test('two Pair', () => {
    expect(Yatzy.two_pair(3, 3, 5, 4, 5)).toBe(16);
    expect(Yatzy.two_pair(3, 3, 5, 5, 5)).toBe(16);
  });

  test('three of a kind', () => {
    expect(Yatzy.three_of_a_kind(3, 3, 3, 4, 5)).toBe(9);
    expect(Yatzy.three_of_a_kind(5, 3, 5, 4, 5)).toBe(15);
    expect(Yatzy.three_of_a_kind(3, 3, 3, 3, 5)).toBe(9);
  });

  test('four of a knd', () => {
    expect(Yatzy.four_of_a_kind(3, 3, 3, 3, 5)).toBe(12);
    expect(Yatzy.four_of_a_kind(5, 5, 5, 4, 5)).toBe(20);
    expect(Yatzy.three_of_a_kind(3, 3, 3, 3, 3)).toBe(9);
    expect(Yatzy.four_of_a_kind(3, 3, 3, 3, 3)).toBe(12);
  });

  test('smallStraight', () => {
    expect(Yatzy.smallStraight(1, 2, 3, 4, 5)).toBe(15);
    expect(Yatzy.smallStraight(2, 3, 4, 5, 1)).toBe(15);
    expect(Yatzy.smallStraight(1, 2, 2, 4, 5)).toBe(0);
  });

  test('largeStraight', () => {
    expect(Yatzy.largeStraight(6, 2, 3, 4, 5)).toBe(20);
    expect(Yatzy.largeStraight(2, 3, 4, 5, 6)).toBe(20);
    expect(Yatzy.largeStraight(1, 2, 2, 4, 5)).toBe(0);
  });

  test('fullHouse', () => {
    expect(Yatzy.fullHouse(6, 2, 2, 2, 6)).toBe(18);
    expect(Yatzy.fullHouse(2, 3, 4, 5, 6)).toBe(0);
    expect(Yatzy.fullHouse(3, 3, 3, 1, 5)).toBe(0);
    expect(Yatzy.fullHouse(4, 4, 4, 4, 4)).toBe(0);
  });
});
