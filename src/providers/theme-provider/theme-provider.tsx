import React, { useMemo, useState } from 'react';
import cls from 'classnames';
import {
  ETheme,
  ThemeContext,
} from '../../context/theme-context';
import styles from './theme-provider.module.scss';
import { ThemeProviderProps } from '../../types/provider';
import getTheme from '../../utils/get-theme/get-theme';

const DEFAULT_THEME = getTheme() as ETheme;

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const [currentTheme, setCurrentTheme] = useState<ETheme>(theme || DEFAULT_THEME);

  const settingsTheme = useMemo(() => ({
    theme: currentTheme,
    setTheme: setCurrentTheme,
  }), [currentTheme]);

  return (
    <ThemeContext.Provider value={settingsTheme}>
      <div id="theme-app" className={cls('theme', currentTheme, styles.theme)}>
        { children }
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
