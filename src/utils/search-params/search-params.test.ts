import { getQueryParams } from './search-params';

describe('Testing of getQueryParams util', () => {
  test('Position case', () => {
    const params = getQueryParams({
      name: 'gleb',
    });
    expect(params).toBe('?name=gleb');
  });
  test('Position case', () => {
    const params = getQueryParams({
      name: 'gleb',
      test: 'test',
    });
    expect(params).toBe('?name=gleb&test=test');
  });
  test('Negative case', () => {
    const params = getQueryParams({
      name: 'gleb',
      test: undefined,
    });
    expect(params).toBe('?name=gleb');
  });
});
