import React from 'react';
import { useLanguage } from 'hooks/use-language';
import { LOCALES } from 'constants/locales';
import { Avatar } from 'shared-components/avatar';
import { Currency } from 'shared-components/currency';
import { Country } from 'shared-components/country';
import Loader from 'shared-components/loader';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { Typography } from 'shared-components/typography';
import styles from './prodile-card.module.scss';
import { TProfileCardProps } from './types';
import { ProfileInputs } from './components/profile-inputs';
import { ProfileButton } from './components/profile-button';
import { profileYupScheme } from './validation-profile';
import { TInputValue } from './components/profile-inputs/types';

export const ProfileCard = ({
  profileEditData,
  profileData,
  onInputNameChange,
  onInputSurnameChange,
  onInputCityChange,
  onInputUsernameChange,
  onChangeCountryValue,
  onChangeCurrencyValue,
  onInputAvatarChange,
  onInputAgeChange,
  onButtonEdit,
  onButtonCancelEdit,
  onProfileSave,
  isLoading = false,
  isProfileDataReceivedSuccessfully = false,
  spinner,
  isReadOnly = false,
  isEdit = false,
}: TProfileCardProps) => {
  const { translation } = useLanguage(LOCALES.PROFILE_PAGE);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<TInputValue>({
    resolver: yupResolver(profileYupScheme()),
    mode: 'onChange',
    values: profileData,
  });

  if (isProfileDataReceivedSuccessfully) {
    return <Typography color="secondary" size="medium-large">{translation('errorLoadProfile')}</Typography>;
  }

  if (!profileData || !profileEditData) {
    return null;
  }

  const renderTitle = () => (isReadOnly ? (
    <h1 className={styles.title}>{translation('title')}</h1>
  ) : (
    <h1 className={styles.title}>{translation('editTitle')}</h1>
  ));

  const renderAvatar = () => (
    <>
      <div className={cn(styles.wrapperAvatar)}>
        <Avatar
          src={profileEditData.avatar}
          alt="user avatar"
          border
          className={styles.avatar}
        />
      </div>
    </>
  );

  const renderLoading = () => isLoading && (spinner || <Loader className={styles.loader} />);

  const onSubmit = () => {
    onProfileSave();
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      { renderLoading() }
      { renderTitle() }
      { renderAvatar() }
      <ProfileInputs
        onInputAvatarChange={onInputAvatarChange}
        onInputAgeChange={onInputAgeChange}
        isReadOnly={isReadOnly}
        onInputNameChange={onInputNameChange}
        profileData={profileEditData}
        onInputSurnameChange={onInputSurnameChange}
        onInputUsernameChange={onInputUsernameChange}
        onInputCityChange={onInputCityChange}
        isLoading={isLoading}
        setValue={setValue}
        errors={errors}
      />
      <Currency
        onChange={onChangeCurrencyValue}
        value={profileEditData?.currency || 'RUB'}
        isReadOnly={isReadOnly}
        className={styles.currency}
        disabled={isReadOnly || isLoading}
      />
      <Country
        value={profileEditData?.country || 'Russia'}
        onChange={onChangeCountryValue}
        className={styles.country}
        disabled={isReadOnly || isLoading}
      />
      {
        isEdit && (
          <div className={styles.wrapperButton}>
            <ProfileButton
              reset={reset}
              isLoading={isLoading}
              isReadOnly={isReadOnly}
              onButtonEdit={onButtonEdit}
              onButtonCancelEdit={onButtonCancelEdit}
              errors={errors}
            />
          </div>
        )
      }
    </form>
  );
};
