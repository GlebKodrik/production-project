import { useContext } from 'react';
import {
  ThemeContext,
} from 'contexts/theme-context';
import { THEMES } from 'constants/themes';
import { TThemes } from 'types/themes';
import { TUseTheme } from './types';

export const useTheme = (): TUseTheme => {
  const { theme, changeTheme } = useContext(ThemeContext);

  const getCurrentTheme = (oldTheme: TThemes): TThemes => (oldTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);

  const toggleTheme = () => {
    const currentTheme = getCurrentTheme(theme);
    changeTheme(currentTheme);
  };

  return {
    theme,
    toggleTheme,
    changeTheme,
  };
};
