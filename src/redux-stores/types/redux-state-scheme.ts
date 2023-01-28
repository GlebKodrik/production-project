import { TLoginFormState } from 'feature/auth/auth-by-username-form/stores/login-form';
import { TNotificationsState } from 'feature/notifications/stores/notifications';
import { TProfileSchema } from 'pages/profile-page/components/profile/stores/profile';
import { TCounterState } from '../stores/counter';
import { TUserScheme } from '../stores/user';
import { TArticleDetailScheme } from '../stores/article-detail';
import { TCommentScheme } from '../../feature/add-comments/stores/comment';

export type TReduxStateScheme = {
  counter: TCounterState,
  user: TUserScheme
  loginForm: TLoginFormState,
  notifications: TNotificationsState,
  // async
  profile?: TProfileSchema,
  article?: TArticleDetailScheme,
  comment?: TCommentScheme,
};
