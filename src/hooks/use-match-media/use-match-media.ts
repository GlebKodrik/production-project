import { useState, useLayoutEffect } from 'react';
import { QUERIES } from './constants';
import { TReturn } from './types';

export const useMatchMedia = (): TReturn => {
  const mediaQueryLists = QUERIES.map((query) => matchMedia(query));

  const getValues = () => mediaQueryLists.map((list) => list.matches);

  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((list) => list.addEventListener('change', handler));

    return () => mediaQueryLists.forEach((list) => list.removeEventListener('change', handler));
  }, []);

  return ['isMobile', 'isTablet', 'isDesktop'].reduce(
    // eslint-disable-next-line max-params
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {},
  );
};
