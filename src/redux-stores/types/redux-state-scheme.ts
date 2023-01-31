import { TLoginFormState } from 'feature/auth/auth-by-username-form/stores/login-form';
import { TNotificationsState } from 'feature/notifications/stores/notifications';
import { TProfileSchema } from 'pages/profile-page/components/profile/stores/profile';
import { TCounterState } from '../stores/counter';
import { TUserScheme } from '../stores/user';
import { TArticleDetailScheme } from '../stores/article-detail';
import { TArticlesScheme } from '../stores/articles';

export type TReduxStateScheme = {
  counter: TCounterState,
  user: TUserScheme
  loginForm: TLoginFormState,
  notifications: TNotificationsState,
  articles: TArticlesScheme,
  // async
  profile?: TProfileSchema,
  articleDetail?: TArticleDetailScheme,
};
