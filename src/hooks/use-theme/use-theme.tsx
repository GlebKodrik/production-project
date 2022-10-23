import { useContext } from 'react';
import {
  ThemeContext,
} from '../../context/theme-context';
import { LOCAL_STORAGE_THEME_KEY, THEMES } from '../../constants/themes';
import { TUseTheme } from './types';
import ControlLocalStorage from '../../utils/control-local-storage/control-local-storage';

const useTheme = (): TUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    ControlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_THEME_KEY, currentTheme);
    setTheme(currentTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
