import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES_PATH } from 'constants/routers';
import { LoaderWithOverlay } from 'shared-components/loader-with-overlay';
import { Layout as PageTemplateLayout } from 'page-templates/layout';
import { PAGES_COMPONENTS, PAGES_PATH_WITH_COMPONENTS } from './constants/pages';

const getPages = (pages: typeof PAGES_PATH_WITH_COMPONENTS) => (
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
      ...getPages(PAGES_PATH_WITH_COMPONENTS),
    ],
  },
  {
    path: ROUTES_PATH.PAGE_404,
    element: PAGES_COMPONENTS.NOT_FOUND,
  },
]);

export default Routes;
