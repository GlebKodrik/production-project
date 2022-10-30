import { TLanguages } from '../../constants/languages';

export type TUseLanguage = {
  translation?: any,
  language?: any,
  changeLanguage?: (newLanguage: TLanguages) => void
};
