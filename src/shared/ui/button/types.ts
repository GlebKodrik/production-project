import { ButtonHTMLAttributes } from 'react';

export enum TThemeButton {
  OUTLINE = 'outline',
}

export interface TAppButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  clear?: boolean,
  theme?: TThemeButton
}
