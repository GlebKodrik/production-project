import React from 'react';
import { ETheme } from '../context/theme-context';

export type ThemeProviderProps = {
  children: React.ReactNode,
  theme?: any,
};

export type ThemeContextProps = {
  theme?: any,
  setTheme?: (theme: ETheme) => void
};
