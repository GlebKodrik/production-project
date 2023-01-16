import React, { useMemo } from 'react';
import { useLanguage } from 'hooks/use-language';
import { LOCALES } from 'constants/locales';
import { Input } from 'shared-components/input';
import { Button } from 'shared-components/button';
import { LoaderWithOverlay } from 'shared-components/loader-with-overlay';
import cn from 'classnames';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { Avatar } from 'shared-components/avatar';
import { Currency } from 'shared-components/currency';
import styles from './prodile-card.module.scss';
import { profileActions } from '../stores/profile';
import { TProfileCard } from './types';
import { Country } from '../../../../../shared-components/country';

export const ProfileCard = ({
  profileData,
  onInputNameChange,
  onInputSurnameChange,
  onInputCityChange,
  onInputUsernameChange,
  onChangeCountryValue,
  onChangeCurrencyValue,
  onInputAvatarChange,
  onInputAgeChange,
  onProfileSave,
  isLoading,
  spinner,
  isReadOnly = false,
}: TProfileCard) => {
  const { translation } = useLanguage(LOCALES.PROFILE);
  const dispatch = useAppDispatch();

  const INPUTS = useMemo(() => [
    { value: profileData?.first, translateText: 'form.name', onChange: onInputNameChange },
    { value: profileData?.lastname, translateText: 'form.surname', onChange: onInputSurnameChange },
    { value: profileData?.age, translateText: 'form.age', onChange: onInputAgeChange },
    { value: profileData?.city, translateText: 'form.city', onChange: onInputCityChange },
    { value: profileData?.username, translateText: 'form.username', onChange: onInputUsernameChange },
    { value: profileData?.avatar, translateText: 'form.avatar', onChange: onInputAvatarChange },
  ], [profileData]);
  const onButtonEdit = () => {
    dispatch(profileActions.changeIsReadOnly(false));
  };

  const onButtonCancelEdit = () => {
    dispatch(profileActions.cancelEdit());
    dispatch(profileActions.changeIsReadOnly(true));
  };

  const renderEditProfile = () => (isReadOnly ? (
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
      >
        {translation('form.cancelEditProfile')}
      </Button>
      <Button
        variant="outline"
        onClick={onProfileSave}
      >
        {translation('form.saveProfile')}
      </Button>
    </>
  ));

  const renderTitle = () => (isReadOnly ? (
    <h1 className={styles.title}>{translation('title')}</h1>
  ) : (
    <h1 className={styles.title}>{translation('editTitle')}</h1>
  ));

  if (!profileData) {
    return null;
  }

  if (isLoading) {
    return spinner || <LoaderWithOverlay />;
  }

  const renderAvatar = () => profileData.avatar && (
  <div className={styles.wrapperAvatar}>
    <Avatar src={profileData.avatar} alt="user avatar" />
  </div>
  );

  return (
    <div className={styles.wrapper}>
      { renderTitle() }
      { renderAvatar() }
      {INPUTS.map(({ translateText, onChange, value }, index) => (
        <Input
          key={index}
          value={value || ''}
          onChange={onChange}
          placeholder={translation(translateText)}
          readOnly={isReadOnly}
          className={cn(styles.input, { [styles.editInput]: !isReadOnly })}
        />
      ))}
      <Currency
        onChange={onChangeCurrencyValue}
        value={profileData?.currency || 'RUB'}
        isReadOnly={isReadOnly}
        className={styles.currency}
      />
      <Country
        value={profileData?.country || 'Russia'}
        onChange={onChangeCountryValue}
        isReadOnly={isReadOnly}
      />
      <div className={styles.wrapperButton}>
        { renderEditProfile() }
      </div>
    </div>
  );
};
