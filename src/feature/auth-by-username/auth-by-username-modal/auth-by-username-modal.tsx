import React from 'react';

import { TAuthByUsernameProps } from './types';
import { Modal } from '../../../shared-components/modal';
import { AuthByUsernameForm } from '../auth-by-username-form';

export const AuthByUsernameModal: React.FC<TAuthByUsernameProps> = ({
  isOpen = false,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <AuthByUsernameForm isOpen={isOpen} />
  </Modal>
);
