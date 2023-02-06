import { TColor } from '../../types/color';

export type TSelectProps = {
  className?: string,
  label?: string,
  onChange: (value: any) => void,
  value: string,
  options: TOptions[],
  name?: string,
  disabled?: boolean,
  color?: TColor
};

export type TOptions = {
  value: string,
  content: string
};
