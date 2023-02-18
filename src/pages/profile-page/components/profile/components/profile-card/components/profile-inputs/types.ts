import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { Control } from 'react-hook-form';
import { TInputProps } from '../../types';

export type TInputName = 'first' | 'lastname' | 'city' | 'age' | 'username' | 'avatar';
export type TInputValue = Partial<Record<TInputName, string>>;

export type TInput = {
  name: TInputName,
  translateText: string,
  onChange: (value: string) => void
};

export type TProfileInputProps = {
  errors: FieldErrors<TInputValue>,
  isReadOnly?: boolean,
  isLoading?: boolean,
  control: Control<TInputValue>
} & TInputProps;
