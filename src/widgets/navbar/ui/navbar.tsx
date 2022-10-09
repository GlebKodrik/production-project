import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from 'classnames';
import styles from './navbar.module.scss';
import { Link } from '../../../shared/ui/link';
import { ROUTES_PATH } from '../../../shared/config/routers-config/routers';
import { ELinkColor } from '../../../app/types/link';

type TProps = {
  classNames?: string
};

export const Navbar: React.FC<TProps> = ({
  classNames,
}) => {
  const { t } = useTranslation();
  return (
    <div className={cls(styles.navbar, classNames)}>
      <div className={cls(styles.links)}>
        <Link
          color={ELinkColor.INVERTED}
          to={ROUTES_PATH.ABOUT}
        >
          {t('aboutLink')}
        </Link>
        <Link
          color={ELinkColor.INVERTED}
          to={ROUTES_PATH.MAIN}
          className={cls(styles.linkRight)}
        >
          {t('mainLink')}
        </Link>
      </div>
    </div>
  );
};
