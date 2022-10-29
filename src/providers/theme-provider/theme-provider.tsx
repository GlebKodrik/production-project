import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import cls from 'classnames';
import {
  ThemeContext,
} from '../../context/theme-context';
import styles from './theme-provider.module.scss';
import { ThemeProviderProps } from './provider';
import { ControlLocalStorage } from '../../utils/control-local-storage';
import { TThemes } from '../../constants/themes';
import { LOCAL_STORAGE_KEYS } from '../../constants/local-storage-key';

const DEFAULT_THEME = 'light' as TThemes;
const THEME_FROM_LOCAL_STORAGE = ControlLocalStorage
  .getValueLocalStorage(LOCAL_STORAGE_KEYS.THEME_KEY) as TThemes;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const getExistTheme = (): TThemes => theme || THEME_FROM_LOCAL_STORAGE;

  const [currentTheme, setCurrentTheme] = useState<TThemes>(getExistTheme() || DEFAULT_THEME);

  const settingsTheme = useMemo(() => ({
    theme: currentTheme,
    setTheme: setCurrentTheme,
  }), [currentTheme]);

  const handlerLocalStorage = useCallback((event) => {
    if (event.oldValue && event.newValue) {
      document.body.classList.remove(event.oldValue);
      document.body.classList.add(event.newValue);
      setCurrentTheme(event.newValue);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('storage', handlerLocalStorage);
    if (!getExistTheme()) {
      ControlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.THEME_KEY, currentTheme);
    }
    document.body.classList.add(currentTheme);

    return () => {
      window.removeEventListener('storage', handlerLocalStorage);
    };
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
