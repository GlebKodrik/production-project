import { TThemeProviderTheme } from '../../providers/theme-provider/provider';

export type TUseTheme = {
  toggleTheme: () => void,
  theme: TThemeProviderTheme
};
