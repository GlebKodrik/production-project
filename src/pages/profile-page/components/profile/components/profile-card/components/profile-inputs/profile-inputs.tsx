import React, { useMemo } from 'react';
import cn from 'classnames';
import { Input } from 'shared-components/input';
import { useLanguage } from 'hooks/use-language';
import { LOCALES } from 'constants/locales';
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
  setValue,
  errors,
}: TProfileInputProps) => {
  const { translation } = useLanguage(LOCALES.PROFILE);
  const INPUTS = useMemo<TInput[]>(() => [
    {
      value: profileData.first, name: 'first', translateText: 'form.name', onChange: onInputNameChange,
    },
    {
      value: profileData.lastname, name: 'lastname', translateText: 'form.surname', onChange: onInputSurnameChange,
    },
    {
      value: profileData.age, name: 'age', translateText: 'form.age', onChange: onInputAgeChange,
    },
    {
      value: profileData.city, name: 'city', translateText: 'form.city', onChange: onInputCityChange,
    },
    {
      value: profileData.username, name: 'username', translateText: 'form.username', onChange: onInputUsernameChange,
    },
    {
      value: profileData.avatar, name: 'avatar', translateText: 'form.avatar', onChange: onInputAvatarChange,
    },
  ], [profileData]);

  return (
    <>
      {INPUTS.map(({
        translateText,
        onChange,
        name,
        value,
      }, index) => (
        <Input
          key={index}
          value={value || ''}
          onChange={(inputValue: string) => {
            setValue(name, inputValue, { shouldValidate: true });
            onChange(inputValue);
          }}
          placeholder={translation(translateText)}
          readOnly={isReadOnly}
          className={cn(styles.input, { [styles.inputEdit]: !isReadOnly })}
          name={name}
          error={Boolean(errors[name])}
          variant={isReadOnly ? 'plain' : 'outline'}
          color="secondary"
        />
      ))}
    </>
  );
};
