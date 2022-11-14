import { TCounterState } from '../stores/counter';
import { TUserScheme } from '../stores/user';
import { TLoginFormState } from '../../feature/auth-by-username/auth-by-username-form/stores/login-form';
import { TNotificationsState } from '../../feature/notifications/stores/notifications';

export type TReduxStateScheme = {
  counter: TCounterState,
  user: TUserScheme
  loginForm: TLoginFormState,
  notifications: TNotificationsState,
};
