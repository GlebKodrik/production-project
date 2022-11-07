import './styles/global.scss';

import React from 'react';
import { render } from 'react-dom';
import Routes from './routers';
import { AppProvider } from './providers/app-provider';

render(
  <AppProvider>
    <Routes />
  </AppProvider>,
  document.getElementById('root'),
);
