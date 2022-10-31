import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import cls from 'classnames';
import {
  ThemeContext,
  ThemeContextProps,
} from '../../context/theme-context';
import styles from './theme-provider.module.scss';
import { ThemeProviderProps } from './types';
import { ControlLocalStorage } from '../../utils/control-local-storage';
import { TThemes } from '../../types/themes';
import { LOCAL_STORAGE_KEYS } from '../../constants/local-storage-keys';

const DEFAULT_THEME = 'light' as TThemes;
const THEME_FROM_LOCAL_STORAGE = ControlLocalStorage
  .getValueLocalStorage(LOCAL_STORAGE_KEYS.THEME_KEY) as TThemes;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const getExistTheme = (): TThemes => theme || THEME_FROM_LOCAL_STORAGE;

  const [currentTheme, setCurrentTheme] = useState<TThemes>(getExistTheme() || DEFAULT_THEME);

  const settingsTheme = useMemo((): ThemeContextProps => ({
    theme: currentTheme,
    changeTheme: setCurrentTheme,
  }), [currentTheme]);

  const handlerLocalStorage = useCallback((event) => {
    if (event.key === LOCAL_STORAGE_KEYS.THEME_KEY) {
      const [oldValue, newValue] = [event.oldValue, event.newValue];

      if (oldValue && newValue) {
        document.body.classList.remove(oldValue);
        document.body.classList.add(newValue);
        setCurrentTheme(newValue);
      }
    }
  }, []);

  useEffect(() => {
    document.body.classList.add(currentTheme);
    window.addEventListener('storage', handlerLocalStorage);

    if (!getExistTheme()) {
      ControlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.THEME_KEY, currentTheme);
    }

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
