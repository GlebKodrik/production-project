import '../../configs/i18next';
import React, {
  useCallback, useEffect,
} from 'react';
import { TLanguagesProvider } from './types';
import { LOCAL_STORAGE_KEYS } from '../../constants/local-storage-keys';
import { LanguageContext } from '../../context/language-context';
import { useLanguage } from '../../hooks/use-language';
import { TLanguages } from '../../constants/languages';

export const LanguageProvider: React.FC<TLanguagesProvider> = ({ children }: TLanguagesProvider) => {
  const { changeLanguage } = useLanguage();
  // const { i18n } = useTranslation();
  // const [language, setLanguage] = useState<TLanguages>(i18n.language as TLanguages);

  const handlerLocalStorage = useCallback((event: StorageEvent) => {
    if (event.key === LOCAL_STORAGE_KEYS.LANG) {
      changeLanguage(event.newValue as TLanguages);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('storage', handlerLocalStorage);
    return () => {
      window.removeEventListener('storage', handlerLocalStorage);
    };
  }, []);

  // useEffect(() => {
  //   setLanguage(i18n.language as TLanguages);
  // }, [i18n.language]);
  //
  // const settingsLanguage = useMemo((): TLanguageContext => ({
  //   language,
  //   changeLanguage: i18n.changeLanguage,
  // }), [language]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <LanguageContext.Provider value={{}}>
      { children }
    </LanguageContext.Provider>
  );
};
