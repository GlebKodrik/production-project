import { InputHTMLAttributes } from 'react';

type TVariantInput = 'outline' | 'plain';
type TColorInput = 'primary' | 'secondary';
type TSizeInput = 'medium' | 'large' | 'extra-large';

export interface TInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>,
'value'
| 'onChange'
| 'name'
| 'size'
| 'color'
| 'disabled'
> {
  value: string | number,
  onChange: (value: string) => void,
  className?: string,
  inputRef?: any,
  tabIndex?: number,
  name?: string,
  error?: string,
  size?: TSizeInput,
  color?: TColorInput,
  variant?: TVariantInput,
  disabled?: boolean
}
