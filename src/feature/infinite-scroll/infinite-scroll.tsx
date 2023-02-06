import React, { MutableRefObject, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TProps } from './types';
import { useInfiniteScroll } from '../../hooks/use-infinite-scroll';
import { getScroll, scrollActions } from './stores/scroll';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

export const InfiniteScroll = ({
  callbackScrollEnd,
  children,
  scrollableTarget,
}: TProps) => {
  const dispatch = useAppDispatch();
  const scroll = useSelector(getScroll);
  const { pathname } = useLocation();
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const elementId = scrollableTarget || '#scrollableTarget';

  useEffect(() => {
    if (!(pathname in scroll)) {
      dispatch(scrollActions.setScrollPosition({
        path: pathname,
        position: 0,
      }));
    }
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
