import React from 'react';
import cls from 'classnames';
import { Button } from '../../shared-components/button';
import styles from './language-switcher.module.scss';
import { TLanguageSwitcher } from './types';
import { LANGUAGES } from '../../constants/languages';
import { useLanguage } from '../../hooks/use-language';

export const LanguageSwitcher: React.FC<TLanguageSwitcher> = (
  {
    className,
    short,
  },
) => {
  const { changeLanguage, language, translation } = useLanguage();
  const onToggleLanguage = () => {
    changeLanguage(language === LANGUAGES.RUSSIAN ? LANGUAGES.ENGLISH : LANGUAGES.RUSSIAN);
  };

  const renderLanguage = () => translation(short ? 'sidebar.shortLanguage' : 'sidebar.language');

  return (
    <Button
      variant="clear"
      onClick={onToggleLanguage}
      className={cls(styles.language, className)}
    >
      { renderLanguage() }
    </Button>
  );
};
