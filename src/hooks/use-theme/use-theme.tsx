import { useContext } from 'react';
import {
  ThemeContext,
} from '../../context/theme-context';
import { THEMES } from '../../constants/themes';
import { TUseTheme } from './types';
import controlLocalStorage from '../../utils/control-local-storage/control-local-storage';
import { LOCAL_STORAGE_KEYS } from '../../constants/local-storage-key';

const useTheme = (): TUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    controlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.THEME_KEY, currentTheme);
    setTheme(currentTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
