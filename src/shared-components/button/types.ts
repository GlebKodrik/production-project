import { ButtonHTMLAttributes, ReactNode } from 'react';

type TVariantButton = 'outline' | 'text' | 'clear' | 'square';
type TColorButton = 'primary' | 'secondary';
type TSizeButton = 'medium' | 'large' | 'extra-large';

export interface TButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TSizeButton
  className?: string,
  color?: TColorButton;
  variant?: TVariantButton;
  disabled?: boolean;
  children: ReactNode;
}
