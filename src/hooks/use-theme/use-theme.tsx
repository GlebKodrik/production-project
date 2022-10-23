import { useContext } from 'react';
import {
  ThemeContext,
} from '../../context/theme-context';
import { LOCAL_STORAGE_THEME_KEY, THEMES } from '../../constants/themes';
import { TUseTheme } from './types';

const useTheme = (): TUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
    setTheme(currentTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
