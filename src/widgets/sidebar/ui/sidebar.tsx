import React, { useState } from 'react';
import cls from 'classnames';
import styles from './sidebar.module.scss';
import { ThemeSwitcher } from '../../../shared/ui/theme-switcher';
import { LanguageSwitcher } from '../../../shared/ui/language-switcher/language-switcher';
import { Button } from '../../../shared/ui/button';
import { EButtonSize, EColorButton } from '../../../app/types/button';

export const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);

  const onToggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  const renderButtonCollapse = () => (collapse ? '>' : '<');
  return (
    <div
      data-testid="sidebar"
      className={cls(styles.sidebar, { [styles.collapse]: collapse })}
    >
      <Button
        type="button"
        square
        onClick={onToggleCollapse}
        className={styles.button}
        size={EButtonSize.LARGE}
        color={EColorButton.INVERTED}
      >
        {renderButtonCollapse()}
      </Button>
      <div className={cls(styles.switchers)}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.languageSwitcher} />
      </div>
    </div>
  );
};
