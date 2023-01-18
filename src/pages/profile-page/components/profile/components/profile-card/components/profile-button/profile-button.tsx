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
  return (
    isReadOnly ? (
      <Button
        variant="outline"
        onClick={onButtonEdit}
      >
        {translation('form.editProfile')}
      </Button>
    ) : (
      <>
        <Button
          variant="outline"
          onClick={onButtonCancelEdit}
          className={styles.buttonCancel}
          disabled={isLoading}
        >
          {translation('form.cancelEditProfile')}
        </Button>
        <Button
          variant="outline"
          disabled={isLoading}
          type="submit"
        >
          {translation('form.saveProfile')}
        </Button>
      </>
    )
  );
};
