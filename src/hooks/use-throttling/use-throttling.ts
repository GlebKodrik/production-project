import { useCallback, useEffect, useRef } from 'react';

export const useThrottling = (callback: (...arg: any) => void, delay = 150) => {
  const throttling = useRef<boolean>(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => {
    clearTimeout(timeout.current);
  }, []);

  return useCallback((...args: any) => {
    if (!throttling.current) {
      callback(...args);
      throttling.current = true;

      timeout.current = setTimeout(() => {
        throttling.current = false;
      }, delay);
    }
  }, [callback, delay]);
};
