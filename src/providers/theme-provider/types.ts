import React from 'react';
import { TThemes } from '../../constants/themes';

export type ThemeProviderProps = {
  children: React.ReactNode,
  theme?: TThemes,
};
