import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const FALLBACK_LANGUAGE = 'ru';

const options = {
  order: ['querystring', 'localStorage', 'navigator', 'path', 'subdomain'],
  lookupLocalStorage: 'lang',
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
  cookieMinutes: 10,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: FALLBACK_LANGUAGE,
    detection: options,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
