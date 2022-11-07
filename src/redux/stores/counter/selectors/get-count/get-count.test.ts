import { DeepPartial } from '@reduxjs/toolkit';
import { TReduxStateScheme } from '../../../../types/redux-state-scheme';
import { getCount } from './get-count';

describe('Test selector get count', () => {
  test('get count', () => {
    const state: DeepPartial<TReduxStateScheme> = {
      counter: { count: 0 },
    };
    expect(getCount(state as TReduxStateScheme)).toEqual(0);
  });
});
