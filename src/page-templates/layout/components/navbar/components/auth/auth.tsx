import React, { useState } from 'react';

import { TAuthProps } from './types';
import { Button } from '../../../../../../shared-components/button';
import { useLanguage } from '../../../../../../hooks/use-language';
import { AuthByUsernameModal } from '../../../../../../feature/auth-by-username';

const Auth: React.FC<TAuthProps> = () => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const { translation } = useLanguage();

  const onToggleAuthModal = () => {
    setIsOpenAuthModal(true);
  };

  const onModalClose = () => {
    setIsOpenAuthModal(false);
  };

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
