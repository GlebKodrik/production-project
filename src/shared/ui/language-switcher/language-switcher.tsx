import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../button';
import cls from '../../lib/class-names';
import styles from './language-switcher.module.scss';

type TLanguageSwitcher = {
  className?: string
};

export const LanguageSwitcher: React.FC<TLanguageSwitcher> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const onToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button clear onClick={onToggleLanguage} className={cls(styles.language, {}, [className])}>
      {t('language')}
    </Button>
  );
};
