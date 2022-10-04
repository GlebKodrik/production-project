import './app/styles/global.scss';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/provider/theme-provider/ui';
import { App } from './app';
import { ErrorBoundary } from './app/provider/error-boundary';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>,

  document.getElementById('root'),
);
