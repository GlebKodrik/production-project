import { namedLazy } from 'shared-components/named-lazy';
import { ROUTES_PATH } from 'constants/routers';
import { TPagesPathWithComponents } from '../types';

export const ASYNC_PAGES = {
  ABOUT: namedLazy(() => import('pages/about-page'), 'AboutPage'),
  PROFILE: namedLazy(() => import('pages/profile-page'), 'ProfilePage'),
  ARTICLE_DETAIL: namedLazy(() => import('../../pages/articles/article-detail-page'), 'ArticleDetailPage'),
  ARTICLES: namedLazy(() => import('../../pages/articles/articles-page'), 'ArticlesPage'),
  BASE: namedLazy(() => import('pages/main-page'), 'MainPage'),
  PAGE_404: namedLazy(() => import('pages/not-found-page'), 'NotFoundPage'),
} as const;

export const PAGES_COMPONENTS: TPagesPathWithComponents[] = [
  { path: ROUTES_PATH.ABOUT, component: ASYNC_PAGES.ABOUT },
  { path: ROUTES_PATH.BASE, component: ASYNC_PAGES.BASE },
  { path: `${ROUTES_PATH.PROFILE}/:id`, component: ASYNC_PAGES.PROFILE, isPrivate: true },
  { path: `${ROUTES_PATH.ARTICLE_DETAIL}/:id`, component: ASYNC_PAGES.ARTICLE_DETAIL, isPrivate: true },
  { path: ROUTES_PATH.ARTICLES, component: ASYNC_PAGES.ARTICLES, isPrivate: true },
  { path: ROUTES_PATH.PAGE_404, component: ASYNC_PAGES.PAGE_404 },
];
