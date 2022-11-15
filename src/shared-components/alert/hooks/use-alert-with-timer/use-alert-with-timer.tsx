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

  const [showAlert] = useState(true);
  const [percentAutoClose, setPercentAutoClose] = useState(0);
  const [onePercent] = useState(100 / autoHideDuration);

  const callsFunctionForAutoClose = useCallback((callback: Function): void => {
    if (autoClose) {
      callback();
    }
  }, [autoClose]);

  const startTimerForAutoCloseAlert = useCallback(() => {
    callsFunctionForAutoClose(startTimer);
  }, [startTimer]);

  const stopTimerForAutoCloseAlert = useCallback(() => {
    callsFunctionForAutoClose(stopTimer);
  }, [stopTimer]);

  const clearTimerForAutoCloseAlert = useCallback(() => {
    callsFunctionForAutoClose(clearTimer);
  }, [clearTimer]);

  useEffect(() => {
    startTimerForAutoCloseAlert();
  }, []);

  useEffect(() => {
    callsFunctionForAutoClose(() => setPercentAutoClose(onePercent * seconds));

    if (seconds === autoHideDuration) {
      if (closeAlert) {
        closeAlert();
      }
      clearTimerForAutoCloseAlert();
      setPercentAutoClose(100);
      // setTimeout(() => {
      //   setShowAlert(false);
      // }, 500);
    }
  }, [seconds]);

  return {
    showAlert,
    startTimerForAutoCloseAlert,
    stopTimerForAutoCloseAlert,
    clearTimerForAutoCloseAlert,
    percentAutoClose,
  };
};
