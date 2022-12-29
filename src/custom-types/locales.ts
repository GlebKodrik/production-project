import { LOCALES } from 'constants/locales';

export type TLocales = typeof LOCALES[keyof typeof LOCALES];
