import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { TReduxStateScheme } from '../types/redux-state-scheme';
import { counterReducer } from '../stores/counter';
import { userReducer } from '../stores/user';

export const createStore = (initialState?: TReduxStateScheme) => {
  const rootReducer: ReducersMapObject<TReduxStateScheme> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<TReduxStateScheme>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};

export const rootStore = createStore();
