import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { TAuthProps } from './types';
import { Button } from '../../../../../../shared-components/button';
import { useLanguage } from '../../../../../../hooks/use-language';
import { AuthByUsernameModal } from '../../../../../../feature/auth';
import { getUserAuth, userActions } from '../../../../../../redux/stores/user';
import { notificationsActions } from '../../../../../../feature/notifications/stores/notifications';

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
    <Button variant="clear" color="inverted" onClick={onLogout}>
      { translation('navbar.logout') }
    </Button>
  );

  const renderButtonLogin = () => (
    <Button variant="clear" color="inverted" onClick={onToggleAuthModal}>
      { translation('navbar.login') }
    </Button>
  );

  return (
    <>
      <AuthByUsernameModal isOpen={isOpenAuthModal} onClose={onModalClose} />
      {isAuth ? renderButtonLogout() : renderButtonLogin() }
    </>
  );
};

export default Auth;
