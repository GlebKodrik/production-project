import React from 'react';
import styles from './navbar.module.scss';
import cls from '../../../shared/lib/class-names';
import { AppLink } from '../../../shared/ui/app-link';
import { ELinkTheme } from '../../../shared/ui/app-link/app-link';

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
        to="/about"
      >
        О странице
      </AppLink>
      <AppLink
        theme={ELinkTheme.INVERTED}
        to="/"
        className={cls(styles.linkRight)}
      >
        основная
      </AppLink>
    </div>
  </div>
);
