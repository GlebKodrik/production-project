import { ButtonHTMLAttributes, ReactNode } from 'react';

import { TSize } from '@/types/size';
import { TColor } from '../types/color';

type TVariantButton = 'outline' | 'text' | 'clear' | 'square';

export type TButtonProps = {
  size?: TSize
  className?: string,
  color?: TColor;
  variant?: TVariantButton;
  disabled?: boolean;
  children?: ReactNode;
  ref?: any
} & ButtonHTMLAttributes<HTMLButtonElement>;
