import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTERS_CONFIG } from '../config/routers-config/routers-config';
import PageLoader from '../../../../widgets/page-loader';

const AppRouter = () => (
  <div>
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(ROUTERS_CONFIG).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <div className="component-wrapper">{element}</div>
}
          />
        ))}
      </Routes>
    </Suspense>
  </div>
);

export default AppRouter;
