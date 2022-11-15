import React from 'react';

import { useSelector } from 'react-redux';
import { TProps } from './types';
import styles from './notifications.module.scss';
import { getNotifications } from './stores/notifications';
import { NotificationsContainer } from './components/notifications-container';

export const Notifications: React.FC<TProps> = () => {
  const notifications = useSelector(getNotifications);
  const isEmptyNotifications = notifications.length < 0;

  if (isEmptyNotifications) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {notifications.map(({ message, id, severity }) => (
          <li className={styles.item} key={id}>
            <NotificationsContainer message={message} id={id} severity={severity} />
          </li>
        ))}
      </ul>
    </div>
  );
};
