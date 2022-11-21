import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES_PATH } from '@constants/routers';
import { LoaderWithOverlay } from '@shared-components/loader-with-overlay';
import { namedLazy } from '@shared-components/named-lazy';
import { Layout as PageTemplateLayout } from '@page-templates/layout';

const AboutPage = namedLazy(() => import('@pages/about-page'), 'AboutPage');
const MainPage = React.lazy(() => import('@pages/main-page'));
const NotFoundPage = React.lazy(() => import('@pages/not-found-page'));

const PAGES = {
  [ROUTES_PATH.ABOUT]: AboutPage,
  [ROUTES_PATH.BASE]: MainPage,
  [ROUTES_PATH.PAGE_404]: NotFoundPage,
};

const getPages = (pages: typeof PAGES) => (
  Object.entries(pages).map(([path, PageComponent]) => ({
    path,
    element: (
      <Suspense fallback={<LoaderWithOverlay />}>
        <PageComponent />
      </Suspense>
    ),
  }))
);

const Routes = () => useRoutes([
  {
    path: ROUTES_PATH.BASE,
    element: <PageTemplateLayout />,
    children: [
      ...getPages(PAGES),
    ],
  },
  {
    path: ROUTES_PATH.PAGE_404,
    element: <NotFoundPage />,
  },
]);

export default Routes;
