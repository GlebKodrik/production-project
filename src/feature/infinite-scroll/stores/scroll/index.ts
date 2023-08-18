import type { TScrollState } from './types';
import { scrollActions, scrollReducer } from './scroll-slice';
import { getScroll } from './selectors/get-scroll';

export {
  TScrollState,
  scrollActions,
  scrollReducer,
  getScroll,
};
