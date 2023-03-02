import React, { useState } from 'react';
import { Typography } from '../../shared-components/typography';
import { Button } from '../../shared-components/button';
import styles from './login-page.module.scss';
import { AuthByUsernameModal } from '../../feature/auth';
import { useLanguage } from '../../hooks/use-language';

export const LoginPage = () => {
  const { translation } = useLanguage();
  const [isOpen, setOpen] = useState(false);

  const onModalOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <Typography
          size="large"
          tag="h1"
          className={styles.title}
        >
          {translation('loginPage.notAuth')}
        </Typography>
        <div>
          <Button variant="outline" size="small" onClick={onModalOpen}>
            {translation('loginPage.auth')}
          </Button>
        </div>
      </div>
      <AuthByUsernameModal isOpen={isOpen} onClose={setOpen} />
    </>
  );
};
