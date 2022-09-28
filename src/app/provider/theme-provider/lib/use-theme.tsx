import { useContext } from 'react';
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../config/theme-context';

export type TUseTheme = {
  toggleTheme: () => void,
  theme: ETheme
};

const useTheme = (): TUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = theme === ETheme.DARK ? ETheme.LIGHT : ETheme.DARK;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);
    setTheme(currentTheme);
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
