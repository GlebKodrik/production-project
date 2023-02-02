import React, { useMemo, useRef } from 'react';
import { useInfiniteScroll } from '../../hooks/use-infinite-scroll';
import { InfiniteScrollContext, TInfiniteScrollContext } from '../../contexts/infinite-scroll-context';

export const InfiniteScrollProvider: React.FC = ({ children }) => {
  const wrapperRef = useRef<any>(null);
  const triggerRef = useRef<any>(null);

  useInfiniteScroll({
    wrapperRef,
    callback,
    triggerRef,
  });

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const settings = {
    callback,
    wrapperRef,
    triggerRef,
  };

  return (
    <InfiniteScrollContext.Provider value={settings}>
      {children}
    </InfiniteScrollContext.Provider>
  );
};
