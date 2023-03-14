import React from 'react';
import cls from 'classnames';
import { Icon } from 'shared-components/icon';
import { Popover } from 'shared-components/popover';
import styles from './navbar.module.scss';
import { Auth } from './components/auth';
import { TProps } from './types';
import { Events } from './components/events';

export const Navbar: React.FC<TProps> = ({
  classNames,
}) => {
  const renderTrigger = () => (
    <Icon
      name="notification"
      fill="primary"
      className={styles.icon}
    />
  );

  return (
    <header className={cls(styles.wrapper, classNames)}>
      <div className={cls(styles.navbar)}>
        <Popover
          trigger={renderTrigger()}
          className={styles.popover}
        >
          <Events />
        </Popover>
        <Auth />
      </div>
    </header>
  );
};
