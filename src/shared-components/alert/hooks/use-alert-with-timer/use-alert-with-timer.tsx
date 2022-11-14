import { useCallback, useEffect, useState } from 'react';
import { TProps, TReturn } from './types';
import useTimer from '../../../../hooks/use-timer';

const DEFAULT_SECONDS_CLOSE_ALERT = 6;

export const useAlertWithTimer = ({
  autoClose = false,
  autoHideDuration = DEFAULT_SECONDS_CLOSE_ALERT,
  closeAlert,
}: TProps): TReturn => {
  const {
    seconds,
    startTimer,
    stopTimer,
    clearTimer,
  } = useTimer();

  const [showAlert, setShowAlert] = useState(true);

  const controlTimerInAlert = useCallback((callback: Function): void => {
    if (autoClose) {
      callback();
    }
  }, [autoClose]);

  const startTimerForAutoCloseAlert = useCallback(() => {
    controlTimerInAlert(startTimer);
  }, [startTimer]);

  const stopTimerForAutoCloseAlert = useCallback(() => {
    controlTimerInAlert(stopTimer);
  }, [stopTimer]);

  const clearTimerForAutoCloseAlert = useCallback(() => {
    controlTimerInAlert(clearTimer);
  }, [clearTimer]);

  useEffect(() => {
    startTimerForAutoCloseAlert();
  }, []);

  useEffect(() => {
    if (seconds === autoHideDuration) {
      if (closeAlert) {
        closeAlert();
      }
      clearTimerForAutoCloseAlert();
      setShowAlert(false);
    }
  }, [seconds]);

  return {
    showAlert,
    startTimerForAutoCloseAlert,
    stopTimerForAutoCloseAlert,
    clearTimerForAutoCloseAlert,
  };
};
