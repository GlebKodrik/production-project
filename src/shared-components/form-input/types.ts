import { Control } from 'react-hook-form';
import { TInputProps } from '../input/types';

export type TProps = {
  name: string,
  control: Control<any>,
  onChange?: (value: string) => void,
  value?: string,
} & Omit<TInputProps, 'onChange' | 'value'>;
