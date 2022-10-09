import React from 'react';
import cls from 'classnames';
import useTheme from '../../../../app/provider/theme-provider/lib/use-theme';
import {
  ETheme,
} from '../../../../app/provider/theme-provider/config/theme-context';
import LightThemeIcon from '../../../assets/icons/theme-light.svg';
import DarkThemeIcon from '../../../assets/icons/theme-dark.svg';

import { Button } from '../../button';
import { TThemeSwitcher } from './types';

export const ThemeSwitcher: React.FC<TThemeSwitcher> = ({ className }) => {
  const { toggleTheme, theme } = useTheme();

  const renderSwitcherIcon = () => (theme === ETheme.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />);
  return (
    <Button onClick={toggleTheme} clear className={cls(className)}>
      {renderSwitcherIcon()}
    </Button>
  );
};
