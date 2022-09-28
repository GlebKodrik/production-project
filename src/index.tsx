import './app/styles/global.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/provider/theme-provider/theme-provider';
import { App } from './app';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
