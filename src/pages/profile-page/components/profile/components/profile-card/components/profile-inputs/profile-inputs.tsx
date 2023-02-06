import React, { useMemo } from 'react';
import cn from 'classnames';
import { useLanguage } from 'hooks/use-language';
import { LOCALES } from 'constants/locales';
import { FormInput } from 'shared-components/form-input';
import styles from '../../prodile-card.module.scss';
import { TInput, TProfileInputProps } from './types';

export const ProfileInputs = ({
  profileData,
  isReadOnly,
  onInputNameChange,
  onInputSurnameChange,
  onInputAgeChange,
  onInputCityChange,
  onInputUsernameChange,
  onInputAvatarChange,
  errors,
  isLoading,
  control,
}: TProfileInputProps) => {
  const { translation } = useLanguage(LOCALES.PROFILE_PAGE);
  const {
    first,
    lastname,
    age,
    city,
    username,
    avatar,
  } = profileData;

  const INPUTS = useMemo<TInput[]>(() => [
    {
      value: first, name: 'first', translateText: 'form.name', onChange: onInputNameChange,
    },
    {
      value: lastname, name: 'lastname', translateText: 'form.surname', onChange: onInputSurnameChange,
    },
    {
      value: age, name: 'age', translateText: 'form.age', onChange: onInputAgeChange,
    },
    {
      value: city, name: 'city', translateText: 'form.city', onChange: onInputCityChange,
    },
    {
      value: username, name: 'username', translateText: 'form.username', onChange: onInputUsernameChange,
    },
    {
      value: avatar,
      name: 'avatar',
      translateText: 'form.avatar',
      onChange: onInputAvatarChange,
    },
  ], [profileData]);

  const variantInput = isReadOnly ? 'plain' : 'outline';

  return (
    <>
      {INPUTS.map(({
        translateText,
        name,
        value,
        onChange,
      }, index) => (
        <FormInput
          control={control}
          key={index}
          value={value || ''}
          onChange={onChange}
          label={translation(translateText)}
          readOnly={isReadOnly}
          className={cn(styles.input)}
          name={name}
          error={errors[name]?.message}
          variant={variantInput}
          color="secondary"
          disabled={isLoading}
        />
      ))}
    </>
  );
};
