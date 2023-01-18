import React from 'react';
import { LINKS_FOR_ALL_USERS, LINKS_FOR_AUTH_USERS, TLinks } from 'page-templates/layout/components/sidebar/constants';
import { Link } from 'shared-components/link';
import styles from 'page-templates/layout/components/sidebar/sidebar.module.scss';
import { Icon } from 'shared-components/icon';
import { useLanguage } from 'hooks/use-language';
import { useSelector } from 'react-redux';
import { getUserAuth } from 'redux-stores/stores/user';

export const SidebarLinks: React.FC = () => {
  const isAuth = useSelector(getUserAuth);
  const { translation } = useLanguage();

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
    <ul>
      {
        LINKS_FOR_ALL_USERS.map(renderLinks)
      }
      {
        isAuth && LINKS_FOR_AUTH_USERS.map(renderLinks)
      }
    </ul>
  );
};
