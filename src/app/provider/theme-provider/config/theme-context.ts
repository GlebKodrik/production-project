import { createContext } from 'react';
import { ThemeContextProps } from '../../../types/types';

export enum ETheme {
  'LIGHT' = 'light',
  'DARK' = 'dark',
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
