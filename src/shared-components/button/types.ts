import { ButtonHTMLAttributes } from 'react';

type TVariantButton = 'outline';
type TColorButton = 'inverted';
type TSizeButton = 'medium' | 'large' | 'extra-large';

export interface TButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TSizeButton
  className?: string,
  clear?: boolean,
  color?: TColorButton
  square?: boolean,
  variant?: TVariantButton
}
