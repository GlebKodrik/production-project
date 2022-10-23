import { createContext } from 'react';
import { ThemeContextProps } from '../../providers/theme-provider/provider';

export const ThemeContext = createContext<ThemeContextProps>({});
