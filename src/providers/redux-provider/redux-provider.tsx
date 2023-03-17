import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '@/redux-stores/root-store';
import { TProps } from './types';

export const ReduxProvider = ({ children }:TProps) => {
  const rootStore = createReduxStore({});

  return (
    <Provider store={rootStore}>
      {children}
    </Provider>
  );
};
