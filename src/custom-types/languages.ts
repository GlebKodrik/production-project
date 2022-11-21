import { LANGUAGES } from '@constants/languages';

export type TLanguages = typeof LANGUAGES[keyof typeof LANGUAGES];
