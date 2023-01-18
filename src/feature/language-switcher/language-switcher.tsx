import React from 'react';
import cls from 'classnames';
import { Button } from 'shared-components/button';
import { LANGUAGES } from 'constants/languages';
import { useLanguage } from 'hooks/use-language';
import { TLanguageSwitcher } from './types';

export const LanguageSwitcher: React.FC<TLanguageSwitcher> = (
  {
    className,
    short,
  },
) => {
  const { changeLanguage, language, translation } = useLanguage();
  const onToggleLanguage = () => {
    if (changeLanguage) {
      changeLanguage(language === LANGUAGES.RUSSIAN ? LANGUAGES.ENGLISH : LANGUAGES.RUSSIAN);
    }
  };

  const renderLanguage = () => translation(short ? 'sidebar.shortLanguage' : 'sidebar.language');

  return (
    <Button
      variant="clear"
      onClick={onToggleLanguage}
      className={cls(className)}
    >
      { renderLanguage() }
    </Button>
  );
};
