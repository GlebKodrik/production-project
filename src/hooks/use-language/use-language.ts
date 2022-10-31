import { useTranslation } from 'react-i18next';
import { TUseLanguage } from './types';
import { TLocales } from '../../types/locales';
import { TLanguages } from '../../types/languages';

export const useLanguage = (pageWithTranslate?: TLocales): TUseLanguage => {
  const { i18n, t } = useTranslation(pageWithTranslate);

  return {
    language: i18n.language as TLanguages,
    translation: t,
    changeLanguage: i18n.changeLanguage,
  };
};
