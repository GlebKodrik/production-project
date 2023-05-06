import createRange from './create-range';

describe('Testing of CreateRange util', () => {
  test('Positive createRange cases', () => {
    expect(createRange(10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(createRange(5)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(createRange(1)).toStrictEqual([1]);
    expect(createRange(3, 6)).toStrictEqual([6, 7, 8]);
    expect(createRange(3, -2)).toStrictEqual([-2, -1, 0]);
  });

  test('Negative createRange cases', () => {
    expect(createRange(0)).toStrictEqual([]);
    expect(createRange(-5)).toStrictEqual([]);
    expect(createRange(null as any)).toStrictEqual([]);
    expect(createRange(undefined as any)).toStrictEqual([]);
  });
});
