import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoaderWithOverlay from '../../shared-components/loader-with-overlay';
import { ErrorBoundary } from '../../pages/error-boundery-page';
import { LanguageProvider } from '../language-provider';
import { ThemeProvider } from '../theme-provider';
import { TAppProviderProps } from './types';
import { rootStore } from '../../redux/root-store';

export const AppProvider: React.FC<TAppProviderProps> = ({ children }) => (
  <BrowserRouter>
    <Suspense fallback={<LoaderWithOverlay />}>
      <ErrorBoundary>
        <Provider store={rootStore}>
          <LanguageProvider>
            <ThemeProvider>
              { children }
            </ThemeProvider>
          </LanguageProvider>
        </Provider>
      </ErrorBoundary>
    </Suspense>
  </BrowserRouter>
);
