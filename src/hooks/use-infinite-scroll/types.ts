import { MutableRefObject } from 'react';

export type TInfiniteScroll = {
  callback: () => void,
  triggerRef: MutableRefObject<HTMLElement>,
  wrapperRef: MutableRefObject<HTMLElement>
};
