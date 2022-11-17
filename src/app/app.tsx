import React, { useEffect } from 'react';
import { useAppDispatch } from '../hooks/use-app-dispatch';
import Routes from './routers';
import { Notifications } from '../feature/notifications';
import { userActions } from '../redux/stores/user';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.verificationAuthUser());
  }, []);

  return (
    <>
      <Routes />
      <Notifications />
    </>
  );
};
