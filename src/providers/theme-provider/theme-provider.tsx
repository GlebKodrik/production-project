import React, { useMemo, useState } from 'react';
import cls from 'classnames';
import {
  ThemeContext,
} from '../../context/theme-context';
import styles from './theme-provider.module.scss';
import { ThemeProviderProps, TThemeProviderTheme } from './provider';
import ControlLocalStorage from '../../utils/control-local-storage/control-local-storage';
import { LOCAL_STORAGE_THEME_KEY, TThemes } from '../../constants/themes';

const DEFAULT_THEME = ControlLocalStorage.getValueLocalStorage(LOCAL_STORAGE_THEME_KEY) as TThemes;

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
