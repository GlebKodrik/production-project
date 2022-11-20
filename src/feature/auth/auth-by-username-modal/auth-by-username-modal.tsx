import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { TAuthByUsernameProps } from './types';
import { Modal } from '../../../shared-components/modal';
import { AuthByUsernameForm } from '../auth-by-username-form';
import { getUserAuth } from '../../../redux/stores/user';

export const AuthByUsernameModal: React.FC<TAuthByUsernameProps> = ({
  isOpen = false,
  onClose,
}) => {
  const isAuth = useSelector(getUserAuth);

  useEffect(() => {
    if (isAuth) {
      onClose();
    }
  }, [isAuth]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <AuthByUsernameForm isOpen={isOpen} />
    </Modal>
  );
};
