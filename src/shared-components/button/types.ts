import { ButtonHTMLAttributes, ReactNode } from 'react';
import { TColor } from '../../types/color';

type TVariantButton = 'outline' | 'text' | 'clear' | 'square';
type TSizeButton = 'medium' | 'large' | 'extra-large';

export interface TButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TSizeButton
  className?: string,
  color?: TColor;
  variant?: TVariantButton;
  disabled?: boolean;
  children: ReactNode;
}
