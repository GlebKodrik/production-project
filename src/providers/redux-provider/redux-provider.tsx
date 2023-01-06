import React from 'react';
import { createReduxStore } from 'redux-stores/root-store';
import { Provider } from 'react-redux';

export const ReduxProvider: React.FC = ({ children }) => {
  const rootStore = createReduxStore({ });

  return (
    <Provider store={rootStore}>
      {children}
    </Provider>
  );
};
