import React from 'react';
import { createReduxStore } from '@stores/root-store';
import { Provider } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const ReduxProvider: React.FC = ({ children }) => {
  const navigation = useNavigate();
  const rootStore = createReduxStore({ navigation });
  return (
    <Provider store={rootStore}>
      {children}
    </Provider>
  );
};
