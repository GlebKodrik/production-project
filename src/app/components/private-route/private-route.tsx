import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuth } from '@/redux-stores/stores/user';
import { ROUTES_PATH } from '@/constants/routers';
import { getUserRole } from '@/redux-stores/stores/profile/selectors/get-user-roles/get-user-roles';
import { TProps } from './types';

export const PrivateRoute = ({ children, roles }: TProps) => {
  const location = useLocation();
  const isAuth = useSelector(getUserAuth);
  const userRole = useSelector(getUserRole);
  const validUserRole = roles?.some((role) => role === userRole);
  if (!isAuth) {
    return <Navigate to={ROUTES_PATH.LOGIN} state={{ form: location }} />;
  }

  if (!validUserRole) {
    return <Navigate to={ROUTES_PATH.NOT_ENOUGH_RIGHTS} state={{ form: location }} />;
  }

  return children;
};
