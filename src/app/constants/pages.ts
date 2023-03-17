import { namedLazy } from '@/shared-components/named-lazy';
import { ROUTES_PATH } from '@/constants/routers';
import { TPagesPathWithComponents } from '../types';
import { EUserRole } from '../../redux-stores/stores/profile/types';

export const ASYNC_PAGES = {
  ABOUT: namedLazy(() => import('pages/about-page'), 'AboutPage'),
  PROFILE: namedLazy(() => import('pages/profile-page'), 'ProfilePage'),
  ARTICLE_DETAIL: namedLazy(() => import('pages/articles/article-detail-page'), 'ArticleDetailPage'),
  ARTICLES: namedLazy(() => import('pages/articles/articles-page'), 'ArticlesPage'),
  ADMIN: namedLazy(() => import('pages/admin-page'), 'AdminPage'),
  NOT_ENOUGH_RIGHTS: namedLazy(() => import('pages/not-enough-rights'), 'NotEnoughRights'),
  ARTICLE_DETAIL_EDIT: namedLazy(
    () => import('pages/articles/article-detail-edit-page'),
    'ArticleDetailEditPage',
  ),
  ARTICLE_DETAIL_NEW: namedLazy(
    () => import('pages/articles/article-detail-create-new-page'),
    'ArticleDetailCreateNewPage',
  ),
  BASE: namedLazy(() => import('pages/main-page'), 'MainPage'),
  LOGIN: namedLazy(() => import('pages/login-page'), 'LoginPage'),
  PAGE_404: namedLazy(() => import('pages/not-found-page'), 'NotFoundPage'),
} as const;

export const PAGES_COMPONENTS: TPagesPathWithComponents[] = [
  {
    path: ROUTES_PATH.ADMIN,
    component: ASYNC_PAGES.ADMIN,
    roles: [EUserRole.ADMIN],
  },
  { path: ROUTES_PATH.ABOUT, component: ASYNC_PAGES.ABOUT },
  { path: ROUTES_PATH.NOT_ENOUGH_RIGHTS, component: ASYNC_PAGES.NOT_ENOUGH_RIGHTS },
  { path: ROUTES_PATH.BASE, component: ASYNC_PAGES.BASE },
  { path: ROUTES_PATH.LOGIN, component: ASYNC_PAGES.LOGIN },
  {
    path: `${ROUTES_PATH.PROFILE}/:id`,
    component: ASYNC_PAGES.PROFILE,
    roles: [EUserRole.ADMIN, EUserRole.USER],
  },
  {
    path: `${ROUTES_PATH.ARTICLE_DETAIL}/:id`,
    component: ASYNC_PAGES.ARTICLE_DETAIL,
    roles: [EUserRole.ADMIN, EUserRole.USER],
  },
  {
    path: ROUTES_PATH.ARTICLES,
    component: ASYNC_PAGES.ARTICLES,
    roles: [EUserRole.ADMIN, EUserRole.USER],
  },
  {
    path: ROUTES_PATH.ARTICLE_DETAIL_NEW,
    component: ASYNC_PAGES.ARTICLE_DETAIL_NEW,
    roles: [EUserRole.ADMIN, EUserRole.USER],
  },
  {
    path: `${ROUTES_PATH.ARTICLE_DETAIL}/:id/edit`,
    component: ASYNC_PAGES.ARTICLE_DETAIL_EDIT,
    roles: [EUserRole.ADMIN, EUserRole.USER],
  },
  { path: ROUTES_PATH.PAGE_404, component: ASYNC_PAGES.PAGE_404 },
];
