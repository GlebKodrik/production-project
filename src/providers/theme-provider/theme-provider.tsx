import React, { useEffect, useMemo, useState } from 'react';
import cls from 'classnames';
import {
  ThemeContext,
} from '../../context/theme-context';
import styles from './theme-provider.module.scss';
import { ThemeProviderProps } from './provider';
import controlLocalStorage from '../../utils/control-local-storage/control-local-storage';
import { TThemes } from '../../constants/themes';
import { LOCAL_STORAGE_KEYS } from '../../constants/local-storage-key';

const LOCAL_STORAGE_THEME = controlLocalStorage.getValueLocalStorage(LOCAL_STORAGE_KEYS.THEME_KEY) as TThemes;
const DEFAULT_THEME = 'light' as TThemes;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const getExistTheme = (): TThemes => LOCAL_STORAGE_THEME || theme;

  const [currentTheme, setCurrentTheme] = useState<TThemes>(getExistTheme() || DEFAULT_THEME);

  const settingsTheme = useMemo(() => ({
    theme: currentTheme,
    setTheme: setCurrentTheme,
  }), [currentTheme]);

  useEffect(() => {
    if (!getExistTheme()) {
      controlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.THEME_KEY, currentTheme);
    }
    document.body.classList.add(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={settingsTheme}>
      <div className={cls(styles.theme)}>
        { children }
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
