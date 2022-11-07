import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { TComponentRenderProps } from './types';
import { TReduxStateScheme } from '../../redux/types/redux-state-scheme';
import { createStore } from '../../redux/root-store/root-store';

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
