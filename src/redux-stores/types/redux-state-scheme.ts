import { TLoginFormState } from 'feature/auth/auth-by-username-form/stores/login-form';
import { TNotificationsState } from 'feature/notifications/stores/notifications';
import { TProfileSchema } from 'pages/profile-page/components/profile/stores/profile';
import { TCounterState } from '../redux-stores/counter';
import { TUserScheme } from '../redux-stores/user';

export type TReduxStateScheme = {
  counter: TCounterState,
  user: TUserScheme
  loginForm: TLoginFormState,
  notifications: TNotificationsState,
  // async
  profile?: TProfileSchema
};
