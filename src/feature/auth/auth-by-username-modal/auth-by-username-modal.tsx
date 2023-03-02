import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { Modal } from 'shared-components/modal';

import { getUserAuth } from 'redux-stores/stores/user';
import { AuthByUsernameForm } from '../auth-by-username-form';
import { TAuthByUsernameProps } from './types';

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
      <AuthByUsernameForm />
    </Modal>
  );
};
