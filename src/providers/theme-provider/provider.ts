import React from 'react';

export type TThemeProviderTheme = 'light' | 'dark';

export type ThemeProviderProps = {
  children: React.ReactNode,
  theme?: TThemeProviderTheme,
};

export type ThemeContextProps = {
  theme?: TThemeProviderTheme,
  setTheme?: (theme: TThemeProviderTheme) => void
};
