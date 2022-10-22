import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const DEFAULT_LANGUAGE = 'ru';
const FALLBACK_LANGUAGE = 'ru';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: FALLBACK_LANGUAGE,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
