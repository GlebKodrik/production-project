import { TLanguages } from 'types/languages';

export type TUseLanguage = {
  translation: any,
  language?: TLanguages,
  changeLanguage?: (newLanguage: TLanguages) => void
};
