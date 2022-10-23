import React, { useMemo, useState } from 'react';
import cls from 'classnames';
import {
  ThemeContext,
} from '../../context/theme-context';
import styles from './theme-provider.module.scss';
import { ThemeProviderProps, TThemeProviderTheme } from './provider';
import getLocalStorageValue from '../../utils/get-theme/get-theme';

const DEFAULT_THEME = getLocalStorageValue<TThemeProviderTheme>();

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const [currentTheme, setCurrentTheme] = useState<TThemeProviderTheme>(theme || DEFAULT_THEME);

  const settingsTheme = useMemo(() => ({
    theme: currentTheme,
    setTheme: setCurrentTheme,
  }), [currentTheme]);

  return (
    <ThemeContext.Provider value={settingsTheme}>
      <div id="theme-app" className={cls('theme', currentTheme, styles.theme)}>
        { children }
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
