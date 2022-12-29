import { TThemes } from 'custom-types/themes';

export type ThemeContextProps = {
  theme?: TThemes,
  changeTheme?: (theme: TThemes) => void
};
