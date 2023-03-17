import React from 'react';

import { useLanguage } from '@/hooks/use-language';
import { TOptions } from '../select';
import { CURRENCY, TCurrencyProps } from './types';
import { ListBox } from '../list-box';

const OPTIONS: TOptions[] = [
  { value: CURRENCY.RUB, content: CURRENCY.RUB },
  { value: CURRENCY.EUR, content: CURRENCY.EUR },
  { value: CURRENCY.USD, content: CURRENCY.USD },
];

export const Currency = ({
  value,
  onChange,
  className,
  disabled,
}: TCurrencyProps) => {
  const { translation } = useLanguage();
  return (
    <ListBox
      items={OPTIONS}
      label={translation('selectCurrency')}
      onChange={onChange}
      value={value}
      className={className}
      disabled={disabled}
      size="small"
    />
  );
};
