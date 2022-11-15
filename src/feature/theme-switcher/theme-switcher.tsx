import React from 'react';
import cls from 'classnames';
import { useTheme } from '../../hooks/use-theme';

import LightThemeIcon from '../../shared-components/icon/images/theme-light.svg';
import DarkThemeIcon from '../../shared-components/icon/images/theme-dark.svg';

import { Button } from '../../shared-components/button';
import { TThemeSwitcher } from './types';
import { THEMES } from '../../constants/themes';

export const ThemeSwitcher: React.FC<TThemeSwitcher> = ({ className }) => {
  const { toggleTheme, theme } = useTheme();

  const onToggleTheme = () => {
    toggleTheme();
  };

  const renderSwitcherIcon = () => (theme === THEMES.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />);

  return (
    <Button onClick={onToggleTheme} variant="clear" className={cls(className)}>
      {renderSwitcherIcon()}
    </Button>
  );
};
