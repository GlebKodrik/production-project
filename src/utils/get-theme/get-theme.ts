import { LOCAL_STORAGE_THEME_KEY, THEMES } from '../../constants/themes';

const getTheme = <TTheme>(): TTheme => (localStorage
  .getItem(LOCAL_STORAGE_THEME_KEY || THEMES.LIGHT) as TTheme);

export default getTheme;
