import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { loginFormReducer } from 'feature/auth/auth-by-username-form/stores/login-form';
import { notificationsReducer } from 'feature/notifications/stores/notifications/slices/notifications-slice';
import { createReducerManager } from 'redux-stores/reducer-menager/reducer-menager';
import { axiosInterceptors } from 'services/axios-interceptors/axios-interceptors';
import { TCreateReduxStore } from './types';
import { TReduxStateScheme } from '../types/redux-state-scheme';
import { counterReducer } from '../stores/counter';
import { userReducer } from '../stores/user';
import { FLAGS } from '../../../configs-project/webpack-configs/constants/variables';
import { articleReducer } from '../stores/articles';
import { scrollReducer } from '../../feature/infinite-scroll/stores/scroll';

export const createReduxStore = ({
  initialState,
  setSearchParams,
  searchParams,
}: TCreateReduxStore) => {
  const rootReducer: ReducersMapObject<TReduxStateScheme> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginFormReducer,
    notifications: notificationsReducer,
    articles: articleReducer,
    scroll: scrollReducer,
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
          setSearchParams,
          searchParams,
        },
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
