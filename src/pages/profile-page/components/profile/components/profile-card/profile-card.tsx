import React from 'react';
import { useLanguage } from 'hooks/use-language';
import { LOCALES } from 'constants/locales';
import { Avatar } from 'shared-components/avatar';
import { Currency } from 'shared-components/currency';
import { Country } from 'shared-components/country';
import Loader from 'shared-components/loader';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './prodile-card.module.scss';
import { TProfileCardProps } from './types';
import { ProfileInputs } from './components/profile-inputs';
import { ProfileButton } from './components/profile-button';

const schema = yup.object({
  first: yup.string().max(2, 'минимальное значение'),
  age: yup.number(),
});

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
}: TProfileCardProps) => {
  const { translation } = useLanguage(LOCALES.PROFILE);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    values: profileData,
  });

  const renderTitle = () => (isReadOnly ? (
    <h1 className={styles.title}>{translation('title')}</h1>
  ) : (
    <h1 className={styles.title}>{translation('editTitle')}</h1>
  ));

  if (!profileData) {
    return null;
  }

  const renderAvatar = () => profileData.avatar && (
    <>
      <div className={styles.wrapperAvatar}>
        <Avatar src={profileData.avatar} alt="user avatar" />
      </div>
    </>
  );

  const renderLoading = () => isLoading && (spinner || <Loader className={styles.loader} />);

  const onSubmit = () => {
    onProfileSave();
  };
  console.log(errors);

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
        profileData={profileData}
        onInputSurnameChange={onInputSurnameChange}
        onInputUsernameChange={onInputUsernameChange}
        onInputCityChange={onInputCityChange}
        setValue={setValue}
        errors={errors}
        isLoading={isLoading}
      />
      <Currency
        onChange={onChangeCurrencyValue}
        value={profileData?.currency || 'RUB'}
        isReadOnly={isReadOnly}
        className={styles.currency}
        disabled={isReadOnly || isLoading}
      />
      <Country
        value={profileData?.country || 'Russia'}
        onChange={onChangeCountryValue}
        className={styles.country}
        disabled={isReadOnly || isLoading}
      />
      <div className={styles.wrapperButton}>
        <ProfileButton
          isLoading={isLoading}
          isReadOnly={isReadOnly}
        />
      </div>
    </form>
  );
};
