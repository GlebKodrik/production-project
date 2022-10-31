import React, { useState } from 'react';

import { TAuthProps } from './types';
import { Button } from '../../../../../../shared-components/button';
import { Modal } from '../../../../../../shared-components/modal';
import { useLanguage } from '../../../../../../hooks/use-language';

const Auth: React.FC<TAuthProps> = () => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const { translation } = useLanguage();

  const onToggleAuthModal = () => {
    setIsOpenAuthModal(true);
  };

  return (
    <>
      <Modal isOpen={isOpenAuthModal} onClose={setIsOpenAuthModal}>
        Привет
      </Modal>
      <Button clear color="inverted" onClick={onToggleAuthModal}>
        { translation('navbar.login') }
      </Button>
    </>
  );
};

export default Auth;
