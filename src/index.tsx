import './styles/global.scss';

import React from 'react';
import { render } from 'react-dom';
import Routes from './routers';
import { AppProvider } from './providers/app-provider';
import { Notifications } from './feature/notifications';

render(
  <AppProvider>
    <Routes />
    <Notifications />
  </AppProvider>,
  document.getElementById('root'),
);
