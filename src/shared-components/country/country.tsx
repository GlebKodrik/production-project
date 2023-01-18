import React from 'react';

import { useLanguage } from 'hooks/use-language';
import { Select } from '../select';
import { COUNTRY, TCountryProps, TOptions } from './types';

const OPTIONS: TOptions[] = [
  { value: COUNTRY.Armenia, content: COUNTRY.Armenia },
  { value: COUNTRY.Belarus, content: COUNTRY.Belarus },
  { value: COUNTRY.Kazakhstan, content: COUNTRY.Kazakhstan },
  { value: COUNTRY.Russia, content: COUNTRY.Russia },
  { value: COUNTRY.Ukraine, content: COUNTRY.Ukraine },
];

export const Country = ({
  value,
  onChange,
  disabled,
  className,
}: TCountryProps) => {
  const { translation } = useLanguage();
  return (
    <Select
      value={value}
      onChange={onChange}
      placeholder={translation('selectCounter')}
      options={OPTIONS}
      disabled={disabled}
      className={className}
    />
  );
};
