import { useContext } from 'react';
import {
  ThemeContext,
} from '../../context/theme-context';
import { THEMES, TThemes } from '../../constants/themes';
import { TUseTheme } from './types';
import controlLocalStorage from '../../utils/control-local-storage/control-local-storage';
import { LOCAL_STORAGE_KEYS, TLocalStorageKeys } from '../../constants/local-storage-key';

const useTheme = (): TUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const getCurrentTheme = (oldTheme: TThemes): TThemes => (oldTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);

  const setClassThemeForBody = (oldTheme: TThemes, currentTheme: TThemes): void => {
    document.body.classList.remove(oldTheme);
    document.body.classList.add(currentTheme);
  };

  const setLocalStorageTheme = (localstorageKey: TLocalStorageKeys, currentTheme: TThemes): void => {
    controlLocalStorage.setValueLocalStorage(localstorageKey, currentTheme);
  };

  const toggleTheme = () => {
    const currentTheme = getCurrentTheme(theme);
    setClassThemeForBody(theme, currentTheme);
    setLocalStorageTheme(LOCAL_STORAGE_KEYS.THEME_KEY, currentTheme);
    setTheme(currentTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
