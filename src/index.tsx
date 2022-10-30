import './styles/global.scss';

import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './providers/theme-provider';
import { ErrorBoundary } from './pages/error-boundery-page';
import Routes from './routers';
import LoaderWithOverlay from './shared-components/loader-with-overlay';
import { LanguageProvider } from './providers/language-provider';

render(
  <BrowserRouter>
    <Suspense fallback={<LoaderWithOverlay />}>
      <ErrorBoundary>
        <LanguageProvider>
          <ThemeProvider>
            <Routes />
          </ThemeProvider>
        </LanguageProvider>
      </ErrorBoundary>
    </Suspense>
  </BrowserRouter>,

  document.getElementById('root'),
);
