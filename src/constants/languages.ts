export const LANGUAGES = {
  RUSSIAN: 'ru',
  ENGLISH: 'en',
} as const;

export type TLanguages = typeof LANGUAGES[keyof typeof LANGUAGES];
