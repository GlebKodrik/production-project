import { TCounterState } from './types';
import { counterActions, counterReducer } from './counter-slice';

describe('Test articleDetailRecommendsSlice reducer', () => {
  test('Testing decrement count', () => {
    const state: TCounterState = {
      count: 10,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual<TCounterState>({ count: 9 });
  });
  test('Testing increment count', () => {
    const state: TCounterState = {
      count: 10,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual<TCounterState>({ count: 11 });
  });
  test('Testing default count', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual<TCounterState>({ count: 1 });
  });
});
