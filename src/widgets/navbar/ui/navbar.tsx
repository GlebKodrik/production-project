import React from 'react';
import cls from 'classnames';
import styles from './navbar.module.scss';
import { Auth } from './components/auth';
import { TProps } from './types';

export const Navbar: React.FC<TProps> = ({
  classNames,
}) => (
  <div className={cls(styles.navbar, classNames)}>
    <div className={cls(styles.links)}>
      <Auth />
    </div>
  </div>
);
