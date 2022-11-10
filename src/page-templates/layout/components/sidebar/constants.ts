import { ROUTES_PATH } from '../../../../constants/routers';
import { ICON_NAMES } from '../../../../shared-components/icon/constants/icon-names';
import { TRoutesPath } from '../../../../types/routes';
import { TIconNames } from '../../../../shared-components/icon';

type TLinks = {
  name: string,
  link: TRoutesPath,
  icon: TIconNames
};

export const LINKS: TLinks[] = [
  { name: 'sidebar.aboutLink', link: ROUTES_PATH.ABOUT, icon: ICON_NAMES.CLARITY_LIST },
  { name: 'sidebar.mainLink', link: ROUTES_PATH.BASE, icon: ICON_NAMES.HOME },
];
