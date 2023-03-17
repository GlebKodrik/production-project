import { THEMES } from '@/constants/themes';

export type TThemes = typeof THEMES[keyof typeof THEMES];
