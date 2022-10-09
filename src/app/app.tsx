import React, { Suspense } from 'react';
import cls from 'classnames';
import useTheme from './provider/theme-provider/lib/use-theme';
import { AppRouter } from './provider/routes/ui';
import { Navbar } from '../widgets/navbar';
import { Sidebar } from '../widgets/sidebar';
import '../shared/config/i18next/i18next';
import PageLoader from '../widgets/page-loader';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={cls('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className={cls('content-page')}>
          <Sidebar />
          <div className="page-wrapper">
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
