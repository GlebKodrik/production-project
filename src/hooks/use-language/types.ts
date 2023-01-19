import { TLanguages } from 'types/languages';
import { TFunction } from 'i18next';

export type TUseLanguage = {
  translation: TFunction,
  language?: TLanguages,
  changeLanguage?: (newLanguage: TLanguages) => void
};
