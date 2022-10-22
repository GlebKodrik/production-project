import './styles/global.scss';
import './configs/i18next';

import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './providers/theme-provider';
import { ErrorBoundary } from './pages/error-boundery-page';
import Routes from './routers';
import LoaderWithOverlay from './shared-components/loader-with-overlay';

render(
  <BrowserRouter>
    <Suspense fallback={<LoaderWithOverlay />}>
      <ErrorBoundary>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  </BrowserRouter>,

  document.getElementById('root'),
);
