import { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';

export type TCreateReduxStore = {
  initialState?: TReduxStateScheme,
  setSearchParams?: any,
  searchParams?: URLSearchParams,
};
