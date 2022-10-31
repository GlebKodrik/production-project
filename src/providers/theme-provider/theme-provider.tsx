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
import { THEMES } from '../../constants/themes';

const DEFAULT_THEME = 'light' as TThemes;
const THEME_FROM_LOCAL_STORAGE = ControlLocalStorage
  .getValueLocalStorage(LOCAL_STORAGE_KEYS.THEME_KEY) as TThemes;

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const getExistTheme = (): TThemes => initialTheme || THEME_FROM_LOCAL_STORAGE;

  const [currentTheme, setCurrentTheme] = useState<TThemes>(getExistTheme() || DEFAULT_THEME);

  const changeTheme = (theme: TThemes) => {
    const isExistTheme = Object.values(THEMES).includes(theme);
    if (isExistTheme) {
      setCurrentTheme(theme);
    }
    return DEFAULT_THEME;
  };

  const settingsTheme = useMemo((): ThemeContextProps => ({
    theme: currentTheme,
    changeTheme,
  }), [currentTheme]);

  const handlerLocalStorage = useCallback((event) => {
    if (event.key === LOCAL_STORAGE_KEYS.THEME_KEY) {
      const [oldValue, newValue] = [event.oldValue, event.newValue];

      if (oldValue && newValue) {
        changeTheme(newValue);
      }
    }
  }, []);

  const handlerThemeDevices = (event: MediaQueryListEvent) => {
    if (event.matches) {
      changeTheme(THEMES.DARK);
    } else {
      changeTheme(THEMES.LIGHT);
    }
  };

  useEffect(() => {
    const windowMatchMediaDevices = window.matchMedia?.('(prefers-color-scheme: dark)');

    if (!getExistTheme()) {
      ControlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.THEME_KEY, currentTheme);
    }
    if (!THEME_FROM_LOCAL_STORAGE && windowMatchMediaDevices.matches) {
      changeTheme(THEMES.DARK);
    }
    windowMatchMediaDevices.addEventListener('change', handlerThemeDevices);
    window.addEventListener('storage', handlerLocalStorage);

    return () => {
      windowMatchMediaDevices.removeEventListener('change', handlerThemeDevices);
      window.removeEventListener('storage', handlerLocalStorage);
    };
  }, []);

  useEffect(() => {
    if (currentTheme) {
      ControlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.THEME_KEY, currentTheme);
    }
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={settingsTheme}>
      <div className={cls(styles.theme, `theme-${currentTheme}`)}>
        { children }
        <div id="portal-app" />
      </div>
    </ThemeContext.Provider>
  );
};
