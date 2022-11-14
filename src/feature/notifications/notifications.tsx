import React from 'react';

import { useSelector } from 'react-redux';
import { TProps } from './types';
import styles from './notifications.module.scss';
import { getNotifications } from './stores/notifications';
import { NotificationsContainer } from './components/notifications-container';
import Portal from '../../shared-components/portal';

export const Notifications: React.FC<TProps> = () => {
  const notifications = useSelector(getNotifications);
  const isEmptyNotifications = notifications.length < 0;

  if (isEmptyNotifications) {
    return null;
  }

  return (
    <Portal>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {notifications.map(({ message, id }) => (
            <li className={styles.item} key={id}>
              <NotificationsContainer message={message} id={id} />
            </li>
          ))}
        </ul>
      </div>
    </Portal>
  );
};
