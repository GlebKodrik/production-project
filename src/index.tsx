import React, { Suspense } from 'react';
import 'styles/global.scss';

import { BrowserRouter } from 'react-router-dom';
import { LoaderWithOverlay } from 'shared-components/loader-with-overlay';
import { ErrorBoundaryPage } from 'pages/error-boundery-page';
import { LanguageProvider } from 'providers/language-provider';
import { ThemeProvider } from 'providers/theme-provider';
import { ReduxProvider } from 'providers/redux-provider';
import { App } from 'app';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Контейнера нет');
}
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Suspense fallback={<LoaderWithOverlay />}>
      <ErrorBoundaryPage>
        <ReduxProvider>
          <LanguageProvider>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </LanguageProvider>
        </ReduxProvider>
      </ErrorBoundaryPage>
    </Suspense>
  </BrowserRouter>,
);
