import React from 'react';
import { ETheme } from '../provider/theme-provider/config/theme-context';

export type ThemeProviderProps = {
  children: React.ReactNode
};

export type ThemeContextProps = {
  theme?: ETheme,
  setTheme?: (theme: ETheme) => void
};
