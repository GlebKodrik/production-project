import { namedLazy } from '@shared-components/named-lazy';
import { ROUTES_PATH } from '@constants/routers';
import { TRoutesPath } from '@custom-types/routes';
import { ReactNode } from 'react';

export const PAGES_COMPONENTS: Record<string, ReactNode> = {
  ABOUT: namedLazy(() => import('@pages/about-page'), 'AboutPage'),
  PROFILE: namedLazy(() => import('@pages/profile-page'), 'ProfilePage'),
  MAIN: namedLazy(() => import('@pages/main-page'), 'MainPage'),
  NOT_FOUND: namedLazy(() => import('@pages/not-found-page'), 'NotFoundPage'),
};

export const PAGES_PATH_WITH_COMPONENTS: Record<TRoutesPath, any> = {
  [ROUTES_PATH.ABOUT]: PAGES_COMPONENTS.ABOUT,
  [ROUTES_PATH.BASE]: PAGES_COMPONENTS.MAIN,
  [ROUTES_PATH.PAGE_404]: PAGES_COMPONENTS.NOT_FOUND,
  [ROUTES_PATH.PROFILE]: PAGES_COMPONENTS.PROFILE,
};
