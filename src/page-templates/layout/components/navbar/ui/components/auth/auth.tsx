import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { TAuthProps } from './types';
import { Button } from '../../../../../../../shared-components/button';
import { Modal } from '../../../../../../../shared-components/modal';

const Auth: React.FC<TAuthProps> = () => {
  const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

  const { t } = useTranslation();

  const onToggleAuthModal = () => {
    setIsOpenAuthModal(true);
  };

  return (
    <>
      <Modal open={isOpenAuthModal} onClose={setIsOpenAuthModal}>
        Привет
      </Modal>
      <Button clear color="inverted" onClick={onToggleAuthModal}>
        { t('navbar.login') }
      </Button>
    </>
  );
};

export default Auth;
