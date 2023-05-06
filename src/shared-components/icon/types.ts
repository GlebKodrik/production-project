import * as CSS from 'csstype';
import React from 'react';
import { ICON_NAMES } from './constants/icon-names';

export type TIconNames = typeof ICON_NAMES[keyof typeof ICON_NAMES];

export type TIconProps = {
  name: TIconNames,
  fill?: 'secondary' | 'primary' | CSS.Property.Color,
  opacity?: number;
  width?: string | number;
  height?: string | number;
  className?: string;
  onClick?: () => void;
} & React.SVGProps<SVGSVGElement>;
