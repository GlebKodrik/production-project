import { InputHTMLAttributes } from 'react';

export interface TProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value: string,
  onChange: (value: string) => void,
  className?: string,
  inputRef?: any,
  tabIndex?: number
}
