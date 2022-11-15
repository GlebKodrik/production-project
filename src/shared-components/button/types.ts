import { ButtonHTMLAttributes } from 'react';

type TVariantButton = 'outline' | 'text' | 'clear' | 'square';
type TColorButton = 'inverted';
type TSizeButton = 'medium' | 'large' | 'extra-large';

export interface TButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TSizeButton
  className?: string,
  color?: TColorButton;
  variant?: TVariantButton;
  disabled?: boolean;
}
