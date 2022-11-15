import React, { useEffect, useMemo } from 'react';

import cls from 'classnames';
import { TProps, TSeverity } from './types';
import styles from './alert.module.scss';
import { Button } from '../button';
import { Icon, TIconNames } from '../icon';
import { useAlertWithTimer } from './hooks/use-alert-with-timer';
import { DEFAULT_ANIMATION_IN_SECONDS, DEFAULT_TIME_IN_SECONDS_CLOSING_ALERT, ICON_NAME_SEVERITY } from './constants';

export const Alert: React.FC<TProps> = ({
  severity,
  onClose,
  children,
  autoClose = false,
  isOpen,
  classNames,
  autoHideDuration = DEFAULT_TIME_IN_SECONDS_CLOSING_ALERT,
}) => {
  const {
    showAlert,
    startTimerForAutoCloseAlert,
    stopTimerForAutoCloseAlert,
    clearTimerForAutoCloseAlert,
    percentAutoClose,
  } = useAlertWithTimer({
    autoHideDuration,
    autoClose,
  });

  useEffect(() => {
    if (onClose && !showAlert) {
      onClose();
    }
  }, [showAlert]);

  const onAlertClose = () => {
    onClose();
    clearTimerForAutoCloseAlert();
  };

  const classes = useMemo(() => ({
    [styles[`severity-${severity}`]]: Boolean(severity),
  }), [severity, isOpen]);

  const onMouseOverAlert = () => {
    stopTimerForAutoCloseAlert();
  };

  const onMouseOutAlert = () => {
    startTimerForAutoCloseAlert();
  };

  if ((isOpen && !isOpen) || !showAlert) {
    return null;
  }

  const renderButtonClose = () => onClose && (
  <Button onClick={onAlertClose} className={styles.buttonClose}>
    <Icon name="close-circle-outline" fill="#fff" />
  </Button>
  );

  const getIconDependingOnSeverity = (severityName: TSeverity): TIconNames => ICON_NAME_SEVERITY[severityName];

  return (
    <div
      className={cls(styles.alert, classes, classNames)}
      onMouseOver={onMouseOverAlert}
      onMouseOut={onMouseOutAlert}
    >
      <div className={styles.iconWithChildren}>
        <Icon name={getIconDependingOnSeverity(severity)} fill="#fff" />
        { children }
      </div>
      { renderButtonClose() }
      <div
        className={styles.progressBar}
        style={{
          width: `${percentAutoClose}%`,
          transition: `width ${DEFAULT_ANIMATION_IN_SECONDS}ms`,
        }}
      />
    </div>
  );
};
