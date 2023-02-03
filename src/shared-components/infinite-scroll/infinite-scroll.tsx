import React, { MutableRefObject, useEffect, useRef } from 'react';
import { TProps } from './types';
import { useInfiniteScroll } from '../../hooks/use-infinite-scroll';

export const InfiniteScroll = ({
  callbackScrollEnd,
  children,
  scrollableTarget,
}: TProps) => {
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const elementId = scrollableTarget || '#scrollableTarget';

  useEffect(() => {
    const element = document.querySelector(elementId) as HTMLDivElement;
    if (element) {
      wrapperRef.current = element;
    }
  }, [scrollableTarget]);

  useInfiniteScroll({
    callback: callbackScrollEnd,
    wrapperRef,
    triggerRef,
  });

  return (
    <>
      {children}
      <div ref={triggerRef} />
    </>
  );
};
