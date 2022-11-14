import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { TReduxStateScheme } from '../types/redux-state-scheme';
import { counterReducer } from '../stores/counter';
import { userReducer } from '../stores/user';
import { FLAGS } from '../../../configs-project/webpack-configs/mode';
import { loginFormReducer } from '../../feature/auth-by-username/auth-by-username-form/stores/login-form';
import { notificationsReducer } from '../../feature/notifications/stores/notifications/slices/notifications-slice';

export const createStore = (initialState?: TReduxStateScheme) => {
  const rootReducer: ReducersMapObject<TReduxStateScheme> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginFormReducer,
    notifications: notificationsReducer,
  };

  return configureStore<TReduxStateScheme>({
    reducer: rootReducer,
    devTools: FLAGS.IS_DEVELOPMENT,
    preloadedState: initialState,
  });
};

export const rootStore = createStore();
export type TAppDispatch = typeof rootStore.dispatch;
