import { TLoginFormState } from 'feature/auth/auth-by-username-form/stores/login-form';
import { TNotificationsState } from 'feature/notifications/stores/notifications';
import { TProfileSchema } from '../stores/profile';
import { TCounterState } from '../stores/counter';
import { TUserScheme } from '../stores/user';
import { TArticlesScheme } from '../stores/articles';
import { TScrollState } from '../../feature/infinite-scroll/stores/scroll';
import type { TArticleScheme } from '../stores/article-detail';
import { rtkQueryApi } from '../../services/api/rtk-query-api';
import { TEventsScheme } from '../stores/events';

export type TReduxStateScheme = {
  counter: TCounterState,
  user: TUserScheme
  loginForm: TLoginFormState,
  notifications: TNotificationsState,
  articles: TArticlesScheme,
  scroll: TScrollState,
  events: TEventsScheme,
  [rtkQueryApi.reducerPath]: ReturnType<typeof rtkQueryApi.reducer>,
  // async
  profile?: TProfileSchema,
  articleDetail?: TArticleScheme,
};
