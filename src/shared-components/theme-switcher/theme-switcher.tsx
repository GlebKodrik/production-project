import React from 'react';
import cls from 'classnames';
import { useTheme } from '../../hooks/use-theme';

import LightThemeIcon from '../icon/images/theme-light.svg';
import DarkThemeIcon from '../icon/images/theme-dark.svg';

import { Button } from '../button';
import { TThemeSwitcher } from './types';
import { THEMES } from '../../constants/themes';

export const ThemeSwitcher: React.FC<TThemeSwitcher> = ({ className }) => {
  const { toggleTheme, theme } = useTheme();

  const renderSwitcherIcon = () => (theme === THEMES.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />);
  return (
    <Button onClick={toggleTheme} clear className={cls(className)}>
      {renderSwitcherIcon()}
    </Button>
  );
};
