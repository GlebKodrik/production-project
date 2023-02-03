import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TProps } from './types';
import { TReduxStateScheme } from '../../redux-stores/types/redux-state-scheme';
import { getScrollPositionByPath } from '../../redux-stores/stores/scroll/selectors/get-scroll/get-scroll';

export const Page = ({ children }: TProps) => {
  const locations = useLocation();
  const scrollPosition = useSelector(
    (state: TReduxStateScheme) => getScrollPositionByPath(state, locations.pathname),
  );

  useEffect(() => {
    const element = document.querySelector('#scrollableDiv');
    if (element) {
      console.log(scrollPosition);
      element.scrollTop = scrollPosition;
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
};
