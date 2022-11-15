import React, { useState } from 'react';
import { Alert } from '../../../../shared-components/alert';
import { TProps } from './types';
import { useAppDispatch } from '../../../../hooks/use-app-dispatch';
import { notificationsActions } from '../../stores/notifications';
import styles from './notifications-container.module.scss';

export const NotificationsContainer: React.FC<TProps> = ({
  message,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useAppDispatch();

  const closeAlert = () => {
    dispatch(notificationsActions.deleteNotification({ id }));
    setIsOpen(false);
  };

  return (
    <>
      <Alert
        severity="success"
        autoClose
        isOpen={isOpen}
        onClose={closeAlert}
        classNames={styles.alert}
      >
        { message }
      </Alert>
    </>
  );
};
