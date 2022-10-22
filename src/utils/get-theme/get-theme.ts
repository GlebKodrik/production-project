import { ETheme, LOCAL_STORAGE_THEME_KEY } from '../../context/theme-context';

const getTheme = (): string => (localStorage
  .getItem(LOCAL_STORAGE_THEME_KEY || ETheme.LIGHT));

export default getTheme;
