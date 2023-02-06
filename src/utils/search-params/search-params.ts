import { TParams } from './types';

export const getQueryParams = (params: TParams) => {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([name, value]) => {
    if (value) {
      searchParams.set(name, value);
    } else {
      searchParams.delete(name);
    }
  });
  return searchParams.toString() && `?${searchParams.toString()}`;
};

export const addQueryParamsInSearch = <T extends TParams>(params: T) => {
  window.history.pushState(null, '', getQueryParams(params));
};
