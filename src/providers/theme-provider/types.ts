import React from 'react';
import { TThemes } from '@/types/themes';

export type ThemeProviderProps = {
  children: React.ReactNode,
  initialTheme?: TThemes,
};
