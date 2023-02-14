import React from 'react';

import { useLanguage } from 'hooks/use-language';
import { COUNTRY, TCountryProps, TOptions } from './types';
import { ListBox } from '../list-box';

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
    <ListBox
      items={OPTIONS}
      onChange={onChange}
      value={value}
      label={translation('selectCounter')}
      disabled={disabled}
      className={className}
      size="small"
    />
  );
};
