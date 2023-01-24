import { ICON_NAMES } from './constants/icon-names';

export type TIconNames = typeof ICON_NAMES[keyof typeof ICON_NAMES];

export type TIconProps = {
  name: TIconNames,
  fill?: 'secondary' | 'primary' | string,
  opacity?: number;
  width?: string;
  height?: string;
  className?: string;
};
