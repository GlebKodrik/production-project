import { useSelector } from 'react-redux';
import { getUserAuth } from 'redux-stores/stores/user';
import { Navigate } from 'react-router-dom';
import { ROUTES_PATH } from 'constants/routers';
import { TProps } from './types';

export const WrapperRoute = ({ children, path }: TProps) => {
  const isAuth = useSelector(getUserAuth);

  if (path === ROUTES_PATH.LOGIN && isAuth) {
    return <Navigate to={ROUTES_PATH.BASE} />;
  }

  return children;
};
