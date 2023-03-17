import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { Notifications } from '@/feature/notifications';
import { userActions } from '../redux-stores/stores/user';
import Routes from './routers';
import { getMounted } from '../redux-stores/stores/user/selectors/get-mounted';

export const App = () => {
  const dispatch = useAppDispatch();
  const mounted = useSelector(getMounted);

  useEffect(() => {
    dispatch(userActions.verificationAuthUser());
  }, []);

  return (
    <>
      {mounted && <Routes />}
      <Notifications />
    </>
  );
};
