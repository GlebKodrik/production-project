import { useSelector } from 'react-redux';
import { getUserAuth } from 'redux-stores/stores/user';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES_PATH } from 'constants/routers';

export const PrivateWrapper = ({ children }: any) => {
  const location = useLocation();
  const isAuth = useSelector(getUserAuth);
  return isAuth ? children : <Navigate to={ROUTES_PATH.BASE} state={{ form: location }} />;
};
