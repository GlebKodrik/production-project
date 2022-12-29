import React from 'react';
import { TThemes } from 'custom-types/themes';

export type ThemeProviderProps = {
  children: React.ReactNode,
  initialTheme?: TThemes,
};
