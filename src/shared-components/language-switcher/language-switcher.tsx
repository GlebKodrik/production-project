import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from 'classnames';
import { Button } from '../button';
import styles from './language-switcher.module.scss';
import { TLanguageSwitcher } from './types';

export const LanguageSwitcher: React.FC<TLanguageSwitcher> = (
  {
    className,
    short,
  },
) => {
  const { t, i18n } = useTranslation();

  const onToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const renderLanguage = () => t(short ? 'sidebar.shortLanguage' : 'sidebar.language');

  return (
    <Button
      clear
      onClick={onToggleLanguage}
      className={cls(styles.language, className)}
    >
      { renderLanguage() }
    </Button>
  );
};
