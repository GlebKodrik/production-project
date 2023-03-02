import { useTranslation } from 'react-i18next';
import { TLocales } from 'types/locales';
import { TLanguages } from 'types/languages';
import { TUseLanguage } from './types';

export const useLanguage = (namePageWithTranslate?: TLocales | TLocales[]): TUseLanguage => {
  const { i18n, t } = useTranslation(namePageWithTranslate);

  return {
    language: i18n.language as TLanguages,
    translation: t,
    changeLanguage: i18n.changeLanguage,
  };
};
