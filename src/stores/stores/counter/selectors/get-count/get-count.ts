import { type TReduxStateScheme } from '../../../../types/redux-state-scheme';

export const getCount = (state: TReduxStateScheme) => state.counter.count;
