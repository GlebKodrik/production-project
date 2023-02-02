import { useEffect } from 'react';
import { TInfiniteScroll } from './types';

export const useInfiniteScroll = ({
  triggerRef,
  wrapperRef,
  callback,
}:TInfiniteScroll): TInfiniteScroll | null => {
  if (!triggerRef || !wrapperRef || !callback) {
    return null;
  }

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    const options = {
      root: wrapperElement,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(triggerElement);

    return () => {
      observer.unobserve(triggerElement);
    };
  }, [callback, triggerRef, wrapperRef]);

  return {
    triggerRef,
    wrapperRef,
    callback,
  };
};
