import { TLanguages } from '../../constants/languages';

export type TLanguageContext = {
  language?: TLanguages,
  changeLanguage?: (language: TLanguages) => void,
  translation?: any
};
