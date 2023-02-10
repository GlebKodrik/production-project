import React, { Suspense } from 'react';
import 'styles/global.scss';

import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LoaderWithOverlay } from 'shared-components/loader-with-overlay';
import { ErrorBoundary } from 'pages/error-boundery-page';
import { LanguageProvider } from 'providers/language-provider';
import { ThemeProvider } from 'providers/theme-provider';
import { ReduxProvider } from 'providers/redux-provider';
import { App } from 'app';

render(
  <BrowserRouter>
    <Suspense fallback={<LoaderWithOverlay />}>
      <ErrorBoundary>
        <ReduxProvider>
          <LanguageProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </LanguageProvider>
        </ReduxProvider>
      </ErrorBoundary>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root'),
);
