import { ROUTES_PATH } from 'constants/routers';
import { ICON_NAMES } from 'shared-components/icon/constants/icon-names';
import { TRoutesPath } from 'types/routes';
import { TIconNames } from 'shared-components/icon';

export type TLinks = {
  name: string,
  link: TRoutesPath,
  icon: TIconNames,
};

export const LINKS_FOR_ALL_USERS: TLinks[] = [
  {
    name: 'sidebar.links.mainLink', link: ROUTES_PATH.BASE, icon: ICON_NAMES.HOME,
  },
  {
    name: 'sidebar.links.aboutLink', link: ROUTES_PATH.ABOUT, icon: ICON_NAMES.CLARITY_LIST,
  },
];

export const LINKS_FOR_AUTH_USERS: TLinks[] = [
  {
    name: 'sidebar.links.profile', link: ROUTES_PATH.PROFILE, icon: ICON_NAMES.PROFILE,
  },
  {
    name: 'sidebar.links.articles', link: ROUTES_PATH.ARTICLE, icon: ICON_NAMES.ARTICLE,
  },
];
