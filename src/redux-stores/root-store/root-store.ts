import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { loginFormReducer } from 'feature/auth/auth-by-username-form/stores/login-form';
import { notificationsReducer } from 'feature/notifications/stores/notifications/slices/notifications-slice';
import { createReducerManager } from 'redux-stores/reducer-menager/reducer-menager';
import { axiosInterceptors } from 'services/axios-interceptors/axios-interceptors';
import { TCreateReduxStore } from 'redux-stores/root-store/types';
import { TReduxStateScheme } from '../types/redux-state-scheme';
import { counterReducer } from '../stores/counter';
import { userReducer } from '../stores/user';
import { FLAGS } from '../../../configs-project/webpack-configs/mode';

export const createReduxStore = ({
  initialState,
  navigation,
}: TCreateReduxStore) => {
  const rootReducer: ReducersMapObject<TReduxStateScheme> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginFormReducer,
    notifications: notificationsReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: (reducerManager.reduce as Reducer<CombinedState<TReduxStateScheme>>),
    devTools: FLAGS.IS_DEVELOPMENT,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: axiosInterceptors,
          navigation,
        },
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
