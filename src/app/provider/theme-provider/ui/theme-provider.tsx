import React, { useMemo, useState } from 'react';
import {
  ETheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from '../config/theme-context';
import { ThemeProviderProps } from '../../../types/provider';

const DEFAULT_THEME = (localStorage
  .getItem(LOCAL_STORAGE_THEME_KEY) as ETheme)
  || ETheme.LIGHT;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const [currentTheme, setCurrentTheme] = useState<ETheme>(theme || DEFAULT_THEME);

  const settingsTheme = useMemo(() => ({
    theme: currentTheme,
    setTheme: setCurrentTheme,
  }), [currentTheme]);

  return (
    <ThemeContext.Provider value={settingsTheme}>
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
