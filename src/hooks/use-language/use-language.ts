import { useTranslation } from 'react-i18next';
import { TLocales } from 'custom-types/locales';
import { TLanguages } from 'custom-types/languages';
import { TUseLanguage } from './types';

export const useLanguage = (namePageWithTranslate?: TLocales): TUseLanguage => {
  const { i18n, t } = useTranslation(namePageWithTranslate);

  return {
    language: i18n.language as TLanguages,
    translation: t,
    changeLanguage: i18n.changeLanguage,
  };
};
