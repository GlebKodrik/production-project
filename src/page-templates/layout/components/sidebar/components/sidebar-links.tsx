import React from 'react';
import { LINKS } from '@page-templates/layout/components/sidebar/constants';
import { Link } from '@shared-components/link';
import styles from '@page-templates/layout/components/sidebar/sidebar.module.scss';
import { Icon } from '@shared-components/icon';
import { useLanguage } from '@hooks/use-language';

export const SidebarLinks: React.FC = () => {
  const { translation } = useLanguage();

  return (
    <ul>
      {LINKS.map(({ name, link, icon }) => (
        <li key={name}>
          <Link
            color="inverted"
            to={link}
          >
            <div className={styles.item}>
              <Icon name={icon} className={styles.icon} />
              <span className={styles.linkText}>{translation(name)}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
