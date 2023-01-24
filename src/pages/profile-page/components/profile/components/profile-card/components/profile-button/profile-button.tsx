import React from 'react';
import { useLanguage } from 'hooks/use-language';
import { LOCALES } from 'constants/locales';
import { Button } from 'shared-components/button';
import styles from '../../prodile-card.module.scss';
import { TProfileButtonProps } from './types';

export const ProfileButton = ({
  isReadOnly,
  isLoading,
  errors,
  onButtonEdit,
  onButtonCancelEdit,
  reset,
}: TProfileButtonProps) => {
  const { translation } = useLanguage(LOCALES.PROFILE_PAGE);

  const isDisableButtonSubmit = Object.keys(errors).length > 0 || isLoading;

  const handleButtonCancelEdit = () => {
    reset();
    onButtonCancelEdit();
  };

  return (
    isReadOnly ? (
      <Button
        variant="outline"
        color="secondary"
        onClick={onButtonEdit}
      >
        {translation('form.editProfile')}
      </Button>
    ) : (
      <>
        <Button
          variant="text"
          onClick={handleButtonCancelEdit}
          className={styles.buttonCancel}
          disabled={isLoading}
        >
          {translation('form.cancelEditProfile')}
        </Button>
        <Button
          color="secondary"
          variant="outline"
          disabled={isDisableButtonSubmit}
          type="submit"
        >
          {translation('form.saveProfile')}
        </Button>
      </>
    )
  );
};
