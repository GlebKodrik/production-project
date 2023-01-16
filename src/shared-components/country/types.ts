export type TCountryProps = {
  className?: string,
  isReadOnly?: boolean,
  value: TCountry,
  onChange: (value: TCountry) => void
};
export type TOptions = {
  value: TCountry,
  content: string
};
export const COUNTRY = {
  Russia: 'Russia',
  Belarus: 'Belarus',
  Ukraine: 'Ukraine',
  Kazakhstan: 'Kazahstan',
  Armenia: 'Armenia',
} as const;

export type TCountry = typeof COUNTRY[keyof typeof COUNTRY];
