import { ReactNode } from 'react';

import { TSize } from '../../types/size';
import { TColor } from '../types/color';

export type TProps = {
  color?: TColor,
  items: TListBoxItems[],
  className?: string,
  value?: string,
  onChange: (value: any) => void,
  defaultValue: string,
  disabled?: boolean,
  size?: TSize
};

export type TListBoxItems = {
  value: string,
  content: ReactNode,
  disabled?: boolean
};
