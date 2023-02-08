import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TInputValue, TProps, TSearch } from './types';

import { searchYupScheme } from './validation-search';
import { FormInput } from '../../shared-components/form-input';
import styles from './search.module.scss';
import { useLanguage } from '../../hooks/use-language';

export const Search = ({
  onChange,
  value,
  onSubmit = () => {},
  color = 'secondary',
  className,
}: TProps) => {
  const { translation } = useLanguage();
  const {
    control,
    handleSubmit,
    reset,
  } = useForm<TInputValue>({
    resolver: yupResolver(searchYupScheme()),
    mode: 'onChange',
    values: {
      search: value || '',
    },
  });

  const onSubmitForm = ({ search }: TSearch) => {
    onSubmit(search, { reset });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className={className}>
      <FormInput
        name="search"
        control={control}
        variant="outline"
        onChange={onChange}
        value={value}
        color={color}
        className={styles.search}
        placeholder={translation('search')}
      />
    </form>
  );
};
