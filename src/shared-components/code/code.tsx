import React from 'react';
import cn from 'classnames';
import { TCodeProps } from './types';
import styles from './code.module.scss';
import { Button } from '../button';
import { Icon } from '../icon';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { notificationsActions } from '../../feature/notifications/stores/notifications';

export const Code = ({
  children,
  className,
  color = 'primary',
  isCopy = false,
  errorMessage,
  successMessage,
}: TCodeProps) => {
  const dispatch = useAppDispatch();
  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
  };

  const onButtonClickCopy = async () => {
    try {
      await window.navigator.clipboard.writeText(children);
      dispatch(notificationsActions.showNotification({
        severity: 'success',
        message: successMessage || 'Text copied successfully',
      }));
    } catch (e) {
      dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: errorMessage || 'A copy error has occurred',
      }));
    }
  };

  return (
    <pre className={cn(styles.code, className, classes)}>
      {isCopy && (
      <Button
        className={styles.copyButton}
        onClick={onButtonClickCopy}
      >
        <Icon name="copy" fill={color} />
      </Button>
      )}
      <code>
        {children}
      </code>
    </pre>

  );
};
