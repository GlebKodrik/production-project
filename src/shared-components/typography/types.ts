import React, { ReactNode } from 'react';

type TColorButton = 'primary' | 'secondary';
type TSizeButton = 'medium' | 'medium-large' | 'large' | 'extra-large';

export interface TTypographyProps {
  size?: TSizeButton
  className?: string,
  color?: TColorButton
  children: ReactNode;
  tag?: React.ElementType;
  fontSize?: number;
}
