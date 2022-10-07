import React, { useState } from 'react';
import cls from '../../../shared/lib/class-names';
import styles from './sidebar.module.scss';
import { ThemeSwitcher } from '../../../shared/ui/theme-switcher';
import {
  LanguageSwitcher,
} from '../../../shared/ui/language-switcher/language-switcher';

export const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);

  const onToggleCollapse = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={cls(styles.sidebar, { [styles.collapse]: collapse })}
    >
      <button type="button" onClick={onToggleCollapse}>...</button>
      <div className={cls(styles.switchers)}>
        <ThemeSwitcher />
        <LanguageSwitcher className={styles.languageSwitcher} />
      </div>
    </div>
  );
};
