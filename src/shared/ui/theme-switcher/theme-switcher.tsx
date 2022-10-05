import React from 'react';
import useTheme from '../../../app/provider/theme-provider/lib/use-theme';
import {
  ETheme,
} from '../../../app/provider/theme-provider/config/theme-context';
import LightThemeIcon from '../../assets/icons/theme-light.svg';
import DarkThemeIcon from '../../assets/icons/theme-dark.svg';

import cls from '../../lib/class-names';
import { Button } from '../button';

type TThemeSwitcher = {
  className?: string,
};

export const ThemeSwitcher: React.FC<TThemeSwitcher> = ({ className }) => {
  const { toggleTheme, theme } = useTheme();

  return (
    <Button onClick={toggleTheme} clear className={cls('', {}, [className])}>
      {theme === ETheme.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon /> }
    </Button>
  );
};
