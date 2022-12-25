export const COUNTRY = {
  Russia: 'Russia',
  Belarus: 'Belarus',
  Ukraine: 'Ukraine',
  Kazakhstan: 'Kazahstan',
  Armenia: 'Armenia',
};

export type TCountry = typeof COUNTRY[keyof typeof COUNTRY];
