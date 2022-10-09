import React from 'react';
import cls from 'classnames';
import styles from './navbar.module.scss';

type TProps = {
  classNames?: string
};

export const Navbar: React.FC<TProps> = ({
  classNames,
}) => (
  <div className={cls(styles.navbar, classNames)}>
    <div className={cls(styles.links)}>
      /
    </div>
  </div>
);
