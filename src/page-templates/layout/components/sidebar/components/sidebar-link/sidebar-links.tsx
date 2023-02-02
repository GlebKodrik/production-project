import React, { useMemo } from 'react';
import { Link } from 'shared-components/link';
import styles from 'page-templates/layout/components/sidebar/sidebar.module.scss';
import { Icon } from 'shared-components/icon';
import { useLanguage } from 'hooks/use-language';
import { useSelector } from 'react-redux';
import { getUserAuth } from 'redux-stores/stores/user';
import { ROUTES_PATH } from 'constants/routers';
import { ICON_NAMES } from 'shared-components/icon/constants/icon-names';
import { getUser } from 'redux-stores/stores/user/selectors/get-user';
import { TRoutesPath } from 'types/routes';
import { TLinks } from './types';

export const SidebarLinks: React.FC = () => {
  const user = useSelector(getUser);
  const isAuth = useSelector(getUserAuth);
  const { translation } = useLanguage();

  const LINKS_FOR_ALL_USERS: TLinks[] = useMemo(() => [
    {
      name: 'sidebar.links.mainLink', link: ROUTES_PATH.BASE, icon: ICON_NAMES.HOME,
    },
    {
      name: 'sidebar.links.aboutLink', link: ROUTES_PATH.ABOUT, icon: ICON_NAMES.CLARITY_LIST,
    },
  ], []);

  const LINKS_FOR_AUTH_USERS: TLinks[] = useMemo(() => [
    {
      name: 'sidebar.links.profile',
      link: `${ROUTES_PATH.PROFILE}/${user?.id}` as TRoutesPath,
      icon: ICON_NAMES.PROFILE,
    },
    {
      name: 'sidebar.links.articles', link: ROUTES_PATH.ARTICLE, icon: ICON_NAMES.ARTICLE,
    },
  ], [user?.id]);

  const renderLinks = ({ name, link, icon }: TLinks) => (
    <li key={name}>
      <Link
        to={link}
      >
        <div className={styles.item}>
          <Icon name={icon} className={styles.icon} />
          <span className={styles.linkText}>{translation(name)}</span>
        </div>
      </Link>
    </li>
  );

  return (
    <nav>
      <ul>
        { LINKS_FOR_ALL_USERS.map(renderLinks) }
        { isAuth && LINKS_FOR_AUTH_USERS.map(renderLinks) }
      </ul>
    </nav>
  );
};
