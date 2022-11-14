import { useRef, useState } from 'react';
import { TReturn } from './types';

const useTimer = (): TReturn => {
  const [seconds, setSeconds] = useState<number>(0);
  const timerId = useRef<ReturnType<typeof setInterval>>();

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  const clearTimer = () => {
    clearInterval(timerId.current);
    setSeconds(0);
  };

  return {
    startTimer,
    stopTimer,
    clearTimer,
    seconds,
  };
};

export default useTimer;
