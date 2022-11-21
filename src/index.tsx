import '@styles/global.scss';

import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { App } from '@app';
import { LoaderWithOverlay } from '@shared-components/loader-with-overlay';
import { ErrorBoundary } from '@pages/error-boundery-page';
import { LanguageProvider } from '@providers/language-provider';
import { ThemeProvider } from '@providers/theme-provider';
import { rootStore } from '@stores/root-store';

render(
  <BrowserRouter>
    <Suspense fallback={<LoaderWithOverlay />}>
      <ErrorBoundary>
        <Provider store={rootStore}>
          <LanguageProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </LanguageProvider>
        </Provider>
      </ErrorBoundary>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root'),
);
