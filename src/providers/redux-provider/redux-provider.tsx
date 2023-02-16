import React from 'react';
import { createReduxStore } from 'redux-stores/root-store';
import { Provider } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

export const ReduxProvider: React.FC = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rootStore = createReduxStore({ setSearchParams, searchParams });

  return (
    <Provider store={rootStore}>
      {children}
    </Provider>
  );
};
