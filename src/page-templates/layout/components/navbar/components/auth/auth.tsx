import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { TAuthProps } from './types';
import { Button } from '../../../../../../shared-components/button';
import { useLanguage } from '../../../../../../hooks/use-language';
import { AuthByUsernameModal } from '../../../../../../feature/auth-by-username';
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
    dispatch(notificationsActions.showNotification({ message: 'Вы успешно вышли!', severity: 'success' }));
  };

  if (isAuth) {
    return (
      <Button variant="clear" color="inverted" onClick={onLogout}>
        { translation('navbar.goOut') }
      </Button>
    );
  }
  return (
    <>
      <AuthByUsernameModal isOpen={isOpenAuthModal} onClose={onModalClose} />
      <Button variant="clear" color="inverted" onClick={onToggleAuthModal}>
        { translation('navbar.login') }
      </Button>
    </>
  );
};

export default Auth;
