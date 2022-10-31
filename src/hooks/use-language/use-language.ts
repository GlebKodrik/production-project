import { useTranslation } from 'react-i18next';
import { TUseLanguage } from './types';
import { TLocales } from '../../types/locales';
import { TLanguages } from '../../types/languages';

export const useLanguage = (namePageWithTranslate?: TLocales): TUseLanguage => {
  const { i18n, t } = useTranslation(namePageWithTranslate);

  return {
    language: i18n.language as TLanguages,
    translation: t,
    changeLanguage: i18n.changeLanguage,
  };
};
