export const CURRENCY = {
  RUB: 'RUB',
  EUR: 'EUR',
  USD: 'USD',
};

export type TCurrency = typeof CURRENCY[keyof typeof CURRENCY];
