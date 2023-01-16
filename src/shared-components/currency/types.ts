export type TCurrencyProps = {
  value: TCurrency,
  onChange: (value: TCurrency) => void,
  isReadOnly?: boolean,
  className?: string
};

export const CURRENCY = {
  RUB: 'RUB',
  EUR: 'EUR',
  USD: 'USD',
} as const;

export type TCurrency = typeof CURRENCY[keyof typeof CURRENCY];
