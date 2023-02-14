import { ReactNode } from 'react';
import { TColor } from '../../types/color';
import { TSize } from '../../types/size';

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
