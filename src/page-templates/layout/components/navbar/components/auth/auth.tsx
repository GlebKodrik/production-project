import React, { useState, Suspense } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared-components/button';
import { useLanguage } from 'hooks/use-language';
import { getUserAuth, userActions } from 'redux-stores/stores/user';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { namedLazy } from 'shared-components/named-lazy';
import Loader from '../../../../../../shared-components/loader';
import { TAuthProps } from './types';

export const AuthByUsernameModal = namedLazy(
  () => import('feature/auth/auth-by-username-modal'),
  'AuthByUsernameModal',
);

const Auth: React.FC<TAuthProps> = () => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);
  const isAuth = useSelector(getUserAuth);
  const dispatch = useDispatch();

  const { translation } = useLanguage();

  const onToggleAuthModal = () => {
    setIsOpenAuthModal(true);
  };

  const onModalClose = () => {
    setIsOpenAuthModal(false);
  };

  const onLogout = async () => {
    await dispatch(userActions.logout());
    dispatch(notificationsActions.showNotification(
      {
        message: translation('navbar.successfullyExited'),
        severity: 'success',
      },
    ));
  };

  const renderButtonLogout = () => (
    <Button variant="clear" onClick={onLogout}>
      { translation('navbar.logout') }
    </Button>
  );

  const renderButtonLogin = () => (
    <Button variant="clear" onClick={onToggleAuthModal}>
      { translation('navbar.login') }
    </Button>
  );

  return (
    <>
      <Suspense fallback={<Loader />}>
        <AuthByUsernameModal isOpen={isOpenAuthModal} onClose={onModalClose} />
      </Suspense>
      {isAuth ? renderButtonLogout() : renderButtonLogin() }
    </>
  );
};

export default Auth;
