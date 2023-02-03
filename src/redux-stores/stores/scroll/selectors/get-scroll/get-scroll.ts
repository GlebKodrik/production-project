import { type TReduxStateScheme } from '../../../../types/redux-state-scheme';

export const getScroll = (state: TReduxStateScheme) => state.scroll.scroll;
export const getScrollPositionByPath = (
  state: TReduxStateScheme,
  pathname: string,
) => state.scroll.scroll[pathname] || 0;
