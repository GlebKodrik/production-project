import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES_PATH } from 'constants/routers';
import { LoaderWithOverlay } from 'shared-components/loader-with-overlay';
import { Layout as PageTemplateLayout } from 'page-templates/layout';
import { PAGES_COMPONENTS } from './constants/pages';
import { TPagesPathWithComponents, TRenderElement } from './types';

import { PrivateWrapper } from './components/private-route';
import { NotFoundPage } from '../pages/not-found-page';

const renderElement = ({ roles, component: PageComponent }: TRenderElement) => {
  const children = (
    <Suspense fallback={<LoaderWithOverlay />}>
      <PageComponent />
    </Suspense>
  );

  if (roles?.length) {
    return (
      <PrivateWrapper roles={roles}>
        {children}
      </PrivateWrapper>
    );
  }

  return children;
};

const getPages = (pages: TPagesPathWithComponents[]) => pages.map(({
  path,
  ...otherProps
}) => ({
  path,
  element: renderElement(otherProps),
}
));

const Routes = () => useRoutes([
  {
    path: ROUTES_PATH.BASE,
    element: <PageTemplateLayout />,
    children: [
      ...getPages(PAGES_COMPONENTS),
    ],
  },
  {
    path: ROUTES_PATH.PAGE_404,
    element: <NotFoundPage />,
  },
]);

export default Routes;
