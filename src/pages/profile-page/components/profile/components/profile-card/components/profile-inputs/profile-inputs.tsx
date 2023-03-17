import React, { useMemo } from 'react';
import cn from 'classnames';
import { useLanguage } from '@/hooks/use-language';
import { LOCALES } from '@/constants/locales';
import { FormInput } from '@/shared-components/form-input';
import styles from '../../prodile-card.module.scss';
import { TInput, TProfileInputProps } from './types';

export const ProfileInputs = ({
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

  const INPUTS = useMemo<TInput[]>(() => [
    {
      name: 'first', translateText: 'form.name', onChange: onInputNameChange,
    },
    {
      name: 'lastname', translateText: 'form.surname', onChange: onInputSurnameChange,
    },
    {
      name: 'age', translateText: 'form.age', onChange: onInputAgeChange,
    },
    {
      name: 'city', translateText: 'form.city', onChange: onInputCityChange,
    },
    {
      name: 'username', translateText: 'form.username', onChange: onInputUsernameChange,
    },
    { name: 'avatar', translateText: 'form.avatar', onChange: onInputAvatarChange },
  ], []);

  const variantInput = isReadOnly ? 'plain' : 'outline';

  return (
    <>
      {INPUTS.map(({
        translateText,
        name,
        onChange,
      }, index) => (
        <FormInput
          control={control}
          key={index}
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
