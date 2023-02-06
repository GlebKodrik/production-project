import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';
import { getScrollPositionByPath } from 'shared-components/infinite-scroll/stores/selectors/get-scroll/get-scroll';
import { TProps } from './types';

export const ScrollToTop = ({ children, scrollableDiv }: TProps) => {
  const locations = useLocation();
  const scrollPosition = useSelector(
    (state: TReduxStateScheme) => getScrollPositionByPath(state, locations.pathname),
  );
  const elementId = scrollableDiv || '#scrollableDiv';

  useLayoutEffect(() => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollTop = scrollPosition;
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
};
