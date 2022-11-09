import React, { useState } from 'react';
import cls from 'classnames';
import styles from './sidebar.module.scss';
import { ThemeSwitcher } from '../../../../shared-components/theme-switcher';
import { LanguageSwitcher } from '../../../../shared-components/language-switcher';
import { Button } from '../../../../shared-components/button';
import { Link } from '../../../../shared-components/link';
import Icon from '../../../../shared-components/icon';
import { useLanguage } from '../../../../hooks/use-language';
import { LINKS } from '../constants';

export const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);
  const { translation } = useLanguage();

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
        <ul>
          {LINKS.map(({ name, link, icon }) => (
            <li key={name}>
              <Link
                color="inverted"
                to={link}
              >
                <div className={styles.item}>
                  <Icon name={icon} className={styles.icon} />
                  <span className={styles.linkText}>{translation(name)}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
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
