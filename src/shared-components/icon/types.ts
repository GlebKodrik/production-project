import { ICON_NAMES } from './constants/icon-names';

export type TIconProps = {
  name: typeof ICON_NAMES[keyof typeof ICON_NAMES],
  fill?: string,
  opacity?: number;
  width?: string;
  height?: string;
  className?: string;
};
