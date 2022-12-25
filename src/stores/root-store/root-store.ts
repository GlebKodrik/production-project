import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { loginFormReducer } from '@feature/auth/auth-by-username-form/stores/login-form';
import { notificationsReducer } from '@feature/notifications/stores/notifications/slices/notifications-slice';
import { createReducerManager } from '@stores/reducer-menager/reducer-menager';
import { TReduxStateScheme } from '../types/redux-state-scheme';
import { counterReducer } from '../redux-stores/counter';
import { userReducer } from '../redux-stores/user';
import { FLAGS } from '../../../configs-project/webpack-configs/mode';

export const createReduxStore = (initialState?: TReduxStateScheme) => {
  const rootReducer: ReducersMapObject<TReduxStateScheme> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginFormReducer,
    notifications: notificationsReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<TReduxStateScheme>({
    reducer: reducerManager.reduce,
    devTools: FLAGS.IS_DEVELOPMENT,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export const rootStore = createReduxStore();
export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
