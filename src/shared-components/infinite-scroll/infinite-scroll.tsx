import React, { useRef } from 'react';
import { TProps } from './types';
import styles from './infinite-scroll.module.scss';
import { useInfiniteScroll } from '../../hooks/use-infinite-scroll';

export const InfiniteScroll = ({
  callbackScrollEnd,
  children,
}: TProps) => {
  const wrapperRef = useRef<any>(null);
  const triggerRef = useRef<any>(null);
  useInfiniteScroll({
    callback: callbackScrollEnd,
    wrapperRef,
    triggerRef,
  });

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      {children}
      <div ref={triggerRef} />
    </div>
  );
};
