import classNames from './class-names';

describe('classNames lib', () => {
  test('With only param', () => {
    expect(classNames('some')).toBe('some');
  });

  test('With additional params', () => {
    expect(classNames('some', {}, ['some2'])).toBe('some some2');
  });

  test('With mods', () => {
    expect(
      classNames('some', { have: true }, ['some2']),
    ).toBe('some have some2');
  });

  test('With mods disabled', () => {
    expect(classNames('some', { have: false }, ['some2'])).toBe('some some2');
  });

  test('With mods undefined', () => {
    expect(
      classNames('some', { have: undefined }, ['some2']),
    ).toBe('some some2');
  });
});
