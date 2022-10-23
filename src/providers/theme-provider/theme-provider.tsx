import React, { useMemo, useState } from 'react';
import cls from 'classnames';
import {
  ThemeContext,
} from '../../context/theme-context';
import styles from './theme-provider.module.scss';
import { ThemeProviderProps } from './provider';
import controlLocalStorage from '../../utils/control-local-storage/control-local-storage';
import { TThemes } from '../../constants/themes';
import { LOCAL_STORAGE_KEYS } from '../../constants/local-storage-key';

const DEFAULT_THEME = controlLocalStorage.getValueLocalStorage(LOCAL_STORAGE_KEYS.THEME_KEY) as TThemes;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const [currentTheme, setCurrentTheme] = useState<TThemes>(theme || DEFAULT_THEME);

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
