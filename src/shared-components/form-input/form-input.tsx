import React from 'react';
import { useController } from 'react-hook-form';
import { TProps } from './types';
import { Input } from '../input';

export const FormInput = ({
  name,
  control,
  onChange,
  value,
  ...params
}: TProps) => {
  const {
    field,
  } = useController({
    name,
    control,
    defaultValue: {
      [name]: '',
    },
  });

  return (
    <Input
      onChange={(inputValue) => {
        field.onChange(inputValue);
        if (onChange) {
          onChange(inputValue);
        }
      }}
      onBlur={field.onBlur}
      value={value || field.value || ''}
      name={field.name}
      inputRef={field.ref}
      {...params}
    />
  );
};
