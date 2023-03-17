import React, { useState } from 'react';
import cls from 'classnames';
import { useMatchMedia } from 'hooks/use-match-media';
import { Icon } from 'shared-components/icon';
import { Popover } from 'shared-components/popover';

import { Button } from 'shared-components/button';

import styles from './navbar.module.scss';
import { Auth } from './components/auth';
import { TProps } from './types';
import { Events } from './components/events';
import { Drawer } from '../../../../shared-components/components/drawer';

export const Navbar: React.FC<TProps> = ({
  classNames,
}) => {
  const { isMobile } = useMatchMedia();
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = () => {
    setIsOpen(true);
  };

  const onCloseDrawer = () => {
    setIsOpen(false);
  };

  const renderTrigger = () => (
    <Icon
      name="notification"
      fill="primary"
      className={styles.icon}
    />
  );

  const renderEventsForDesktop = () => (
    <Popover
      trigger={renderTrigger()}
      className={styles.trigger}
    >
      <Events className={styles.events} />
    </Popover>
  );

  const renderEventsForMobile = () => (
    <>
      <Button className={styles.trigger} onClick={onOpenDrawer}>{renderTrigger()}</Button>
      <Drawer onClose={onCloseDrawer} isOpen={isOpen}>
        <Events />
      </Drawer>
    </>
  );

  return (
    <header className={cls(styles.wrapper, classNames)}>
      <div className={cls(styles.navbar)}>
        {isMobile
          ? renderEventsForMobile()
          : renderEventsForDesktop()}
        <Auth />
      </div>
    </header>
  );
};
