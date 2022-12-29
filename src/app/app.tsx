import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { Notifications } from 'feature/notifications';
import { userActions } from '../redux-stores/redux-stores/user';
import Routes from './routers';

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
