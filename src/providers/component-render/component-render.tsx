import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { TReduxStateScheme } from '@/redux-stores/types/redux-state-scheme';
import { createReduxStore } from '@/redux-stores/root-store/root-store';
import i18nextForTests from '@/configs/i18next-for-test';
import { TComponentRenderProps } from './types';

export const componentRender = ({ component, options = {}, initialState }: TComponentRenderProps) => {
  const {
    route = '/',
  } = options;

  const store = createReduxStore({ initialState: initialState as TReduxStateScheme });

  return render(
    <MemoryRouter initialEntries={[route]}>
      <Provider store={store}>
        <I18nextProvider i18n={i18nextForTests}>
          {component}
        </I18nextProvider>
      </Provider>
    </MemoryRouter>
    ,
  );
};
