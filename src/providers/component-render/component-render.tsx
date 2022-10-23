import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TComponentRenderOptions } from './types';

export const componentRender = (component: ReactNode, options: TComponentRenderOptions = {}) => {
  const {
    route = '/',
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      {component}
    </MemoryRouter>,
  );
};
