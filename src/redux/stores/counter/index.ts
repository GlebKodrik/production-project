import { TCounterState } from './types';
import { counterActions, counterReducer } from './counter-slice';
import { getCount } from './selectors/get-count';

export {
  TCounterState,
  counterActions,
  counterReducer,
  getCount,
};
