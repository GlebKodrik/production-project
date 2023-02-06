import { useCallback, useEffect, useRef } from 'react';

export const useDebounce = (callback: (...arg: any) => void, delay = 500) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => {
    clearTimeout(timeout.current);
  }, []);

  return useCallback((...args) => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    timeout.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};
