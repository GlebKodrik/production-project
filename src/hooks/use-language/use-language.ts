// import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { TUseLanguage } from './types';
// import { LanguageContext } from '../../context/language-context';
import { TLocales } from '../../types/locales';

export const useLanguage = (pageWithTranslate?: TLocales): TUseLanguage => {
  const { i18n, t } = useTranslation(pageWithTranslate);
  // const { language, changeLanguage } = useContext(LanguageContext);

  return {
    language: i18n.language,
    translation: t,
    changeLanguage: i18n.changeLanguage,
  };
};
