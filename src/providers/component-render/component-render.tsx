import React, { Suspense } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';
import { createReduxStore } from 'redux-stores/root-store/root-store';
import { TComponentRenderProps } from './types';

export const componentRender = ({ component, options = {}, initialState }: TComponentRenderProps) => {
  const {
    route = '/',
  } = options;

  const store = createReduxStore({ initialState: initialState as TReduxStateScheme });

  return render(
    <Suspense fallback={<div>Loading... </div>}>
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          {component}
        </MemoryRouter>
      </Provider>
    </Suspense>,
  );
};
