import React from 'react';
import { createReduxStore } from 'redux-stores/root-store';
import { Provider } from 'react-redux';
import { TProps } from './types';

export const ReduxProvider = ({ children }:TProps) => {
  const rootStore = createReduxStore({});

  return (
    <Provider store={rootStore}>
      {children}
    </Provider>
  );
};
