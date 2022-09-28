import { RouteProps } from 'react-router-dom';
import { ERoutesName, ROUTES_PATH } from '../../../../../shared/config/routers-config/routers';
import { AboutPage } from '../../../../../pages/about-page';
import { MainPage } from '../../../../../pages/main-page';

export const ROUTERS_CONFIG: Record<ERoutesName, RouteProps> = {
  [ERoutesName.ABOUT]: {
    path: ROUTES_PATH.about,
    element: <AboutPage />,
  },
  [ERoutesName.MAIN]: {
    path: ROUTES_PATH.main,
    element: <MainPage />,
  },

};
