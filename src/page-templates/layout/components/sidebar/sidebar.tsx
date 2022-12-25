import React, { useState } from 'react';
import cls from 'classnames';
import { ThemeSwitcher } from '@feature/theme-switcher';
import { LanguageSwitcher } from '@feature/language-switcher';
import { Button } from '@shared-components/button';
import { SidebarLinks } from '@page-templates/layout/components/sidebar/components';
import styles from './sidebar.module.scss';

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
      <div className={styles.linkWrapper}>
        <SidebarLinks />
      </div>

      <Button
        type="button"
        variant="square"
        onClick={onToggleCollapse}
        className={styles.button}
        size="large"
        color="inverted"
      >
        { renderButtonCollapse() }
      </Button>

      <div className={cls(styles.switchers)}>
        <ThemeSwitcher />
        <LanguageSwitcher
          className={styles.languageSwitcher}
          short={collapse}
        />
      </div>
    </div>
  );
};
