import { UseFormReset } from 'react-hook-form/dist/types/form';
import { TColor } from '../../types/color';

export type TProps = {
  onChange?: (value: string) => void,
  value?: string,
  onSubmit?: (value: string, { reset }: TOption) => void,
  color?: TColor,
  className?: string
};
export type TOption = {
  reset: UseFormReset<TInputValue>
};
export type TInputValue = TSearch;

export type TSearch = {
  search: string
};
