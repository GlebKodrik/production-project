import { InputHTMLAttributes } from 'react';

export interface TProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'name'> {
  value: string | number,
  onChange: (value: string) => void,
  className?: string,
  inputRef?: any,
  tabIndex?: number,
  name?: string
  error?: boolean
}
