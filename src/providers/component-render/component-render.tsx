import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TReduxStateScheme } from '../../stores/types/redux-state-scheme';
import { createStore } from '../../stores/root-store/root-store';
import { TComponentRenderProps } from './types';

export const componentRender = ({ component, options = {}, initialState }: TComponentRenderProps) => {
  const {
    route = '/',
  } = options;

  const store = createStore(initialState as TReduxStateScheme);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        {component}
      </MemoryRouter>
    </Provider>,
  );
};
