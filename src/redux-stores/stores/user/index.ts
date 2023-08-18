import type { TUserScheme } from './types';
import { userReducer, userActions } from './user-slice';
import { getUserAuth } from './selectors/get-user-auth';

export {
  TUserScheme,
  userActions,
  getUserAuth,
  userReducer,
};
