import React from 'react';
import { useLanguage } from 'hooks/use-language';
import { LOCALES } from 'constants/locales';
import { Button } from 'shared-components/button';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import styles from '../../prodile-card.module.scss';
import { TProfileButtonProps } from './types';
import { profileActions } from '../../../../stores/profile';

export const ProfileButton = ({
  isReadOnly,
  isLoading,
  errors,
}: TProfileButtonProps) => {
  const { translation } = useLanguage(LOCALES.PROFILE);
  const dispatch = useAppDispatch();

  const onButtonEdit = () => {
    dispatch(profileActions.changeIsReadOnly(false));
  };

  const onButtonCancelEdit = () => {
    dispatch(profileActions.cancelEdit());
    dispatch(profileActions.changeIsReadOnly(true));
  };

  const isDisableButtonSubmit = Object.keys(errors).length > 0 || isLoading;

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
          onClick={onButtonCancelEdit}
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
