import React from 'react';

import { useLanguage } from 'hooks/use-language';
import { Select, TOptions } from '../select';
import { CURRENCY, TCurrencyProps } from './types';

const OPTIONS: TOptions[] = [
  { value: CURRENCY.RUB, content: CURRENCY.RUB },
  { value: CURRENCY.EUR, content: CURRENCY.EUR },
  { value: CURRENCY.USD, content: CURRENCY.USD },
];

export const Currency = ({
  value,
  onChange,
  isReadOnly = false,
  className,
  name,
}: TCurrencyProps) => {
  const { translation } = useLanguage();
  return (
    <Select
      value={value}
      onChange={onChange}
      placeholder={translation('selectCurrency')}
      options={OPTIONS}
      isReadOnly={isReadOnly}
      className={className}
      name={name}
    />
  );
};
