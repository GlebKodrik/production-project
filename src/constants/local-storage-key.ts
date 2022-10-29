export const LOCAL_STORAGE_KEYS = {
  THEME_KEY: 'mode',
} as const;

export type TLocalStorageKeys = typeof LOCAL_STORAGE_KEYS[keyof typeof LOCAL_STORAGE_KEYS];
