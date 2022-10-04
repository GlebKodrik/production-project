import { RouteProps } from 'react-router-dom';
import { ROUTES_PATH } from '../../../../../shared/config/routers-config/routers';
import { AboutPage } from '../../../../../pages/about-page';
import { MainPage } from '../../../../../pages/main-page';
import NotFound from '../../../../../pages/not-found';

export const ROUTERS_CONFIG: RouteProps[] = [
  {
    path: ROUTES_PATH.ABOUT,
    element: <AboutPage />,
  },
  {
    path: ROUTES_PATH.MAIN,
    element: <MainPage />,
  },
  {
    path: ROUTES_PATH.PAGE_404,
    element: <NotFound />,
  },
];
