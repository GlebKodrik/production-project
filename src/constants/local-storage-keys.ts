export const LOCAL_STORAGE_KEYS = {
  THEME_KEY: 'mode',
  LANG: 'lang',
} as const;

export type TLocalStorageKeys = typeof LOCAL_STORAGE_KEYS[keyof typeof LOCAL_STORAGE_KEYS];
