import React from 'react';
import styles from './navbar.module.scss';
import cls from '../../../shared/lib/class-names';
import { AppLink } from '../../../shared/ui/app-link';
import { ELinkTheme } from '../../../shared/ui/app-link/app-link';
import { ROUTES_PATH } from '../../../shared/config/routers-config/routers';

type TProps = {
  classNames?: string
};

export const Navbar: React.FC<TProps> = ({
  classNames,
}) => (
  <div className={cls(styles.navbar, {}, [classNames])}>
    <div className={cls(styles.links)}>
      <AppLink
        theme={ELinkTheme.INVERTED}
        to={ROUTES_PATH.ABOUT}
      >
        О странице
      </AppLink>
      <AppLink
        theme={ELinkTheme.INVERTED}
        to={ROUTES_PATH.MAIN}
        className={cls(styles.linkRight)}
      >
        основная
      </AppLink>
    </div>
  </div>
);
