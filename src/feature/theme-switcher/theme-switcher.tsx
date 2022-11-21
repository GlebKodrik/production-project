import React from 'react';
import cls from 'classnames';
import { useTheme } from '@hooks/use-theme';

import { Button } from '@shared-components/button';
import { THEMES } from '@constants/themes';
import { Icon } from '@shared-components/icon';

import { TThemeSwitcher } from './types';

export const ThemeSwitcher: React.FC<TThemeSwitcher> = ({ className }) => {
  const { toggleTheme, theme } = useTheme();

  const onToggleTheme = () => {
    toggleTheme();
  };

  const renderSwitcherIcon = () => (theme === THEMES.LIGHT ? (
    <Icon
      name="theme-dark"
      width="40px"
      height="41px"
    />
  ) : (
    <Icon
      name="theme-light"
      width="40px"
      height="41px"
    />
  ));

  return (
    <Button onClick={onToggleTheme} variant="clear" className={cls(className)}>
      {renderSwitcherIcon()}
    </Button>
  );
};
