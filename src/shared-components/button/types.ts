import { ButtonHTMLAttributes, ReactNode } from 'react';
import { TColor } from '../../types/color';
import { TSize } from '../../types/size';

type TVariantButton = 'outline' | 'text' | 'clear' | 'square';

export interface TButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TSize
  className?: string,
  color?: TColor;
  variant?: TVariantButton;
  disabled?: boolean;
  children: ReactNode;
}
