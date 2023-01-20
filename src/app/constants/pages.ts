import { namedLazy } from 'shared-components/named-lazy';
import { ROUTES_PATH } from 'constants/routers';
import { TPagesPathWithComponents } from '../types';

export const PAGES_COMPONENTS = {
  ABOUT: namedLazy(() => import('pages/about-page'), 'AboutPage'),
  PROFILE: namedLazy(() => import('pages/profile-page'), 'ProfilePage'),
  BASE: namedLazy(() => import('pages/main-page'), 'MainPage'),
  PAGE_404: namedLazy(() => import('pages/not-found-page'), 'NotFoundPage'),
} as const;

export const PAGES_PATH_WITH_COMPONENTS: TPagesPathWithComponents[] = [
  { path: ROUTES_PATH.ABOUT, component: PAGES_COMPONENTS.ABOUT },
  { path: ROUTES_PATH.BASE, component: PAGES_COMPONENTS.BASE },
  { path: ROUTES_PATH.PROFILE, component: PAGES_COMPONENTS.PROFILE, isPrivate: true },
  { path: ROUTES_PATH.PAGE_404, component: PAGES_COMPONENTS.PAGE_404 },
];
