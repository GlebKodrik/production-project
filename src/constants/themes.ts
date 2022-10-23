export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
} as const;

export type TThemes = typeof THEMES[keyof typeof THEMES];

export const LOCAL_STORAGE_THEME_KEY = 'theme';
