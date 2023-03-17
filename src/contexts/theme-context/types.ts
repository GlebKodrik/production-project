import { TThemes } from '@/types/themes';

export type ThemeContextProps = {
  theme?: TThemes,
  changeTheme?: (theme: TThemes) => void
};
