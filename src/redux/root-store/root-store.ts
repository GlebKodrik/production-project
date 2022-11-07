import { configureStore } from '@reduxjs/toolkit';
import { TReduxStateScheme } from '../types/redux-state-scheme';
import { counterReducer } from '../stores/counter';

export const createStore = (initialState?: TReduxStateScheme) => configureStore<TReduxStateScheme>({
  reducer: {
    counter: counterReducer,
  },
  devTools: __IS_DEV__,
  preloadedState: initialState,
});

export const rootStore = createStore();
