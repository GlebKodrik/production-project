import { TThemes } from '../../constants/themes';

export type ThemeContextProps = {
  theme?: TThemes,
  changeTheme?: (theme: TThemes) => void
};
