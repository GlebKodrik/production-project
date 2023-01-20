import { useSelector } from 'react-redux';
import { getUserAuth } from 'redux-stores/stores/user';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateWrapper = ({ children }: any) => {
  const location = useLocation();
  const isAuth = useSelector(getUserAuth);
  console.log(1);
  return isAuth ? children : <Navigate to="/" state={{ form: location }} />;
};
