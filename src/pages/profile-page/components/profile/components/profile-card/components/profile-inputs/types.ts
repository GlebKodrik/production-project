import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { TUser } from 'redux-stores/stores/profile/types';
import { Control } from 'react-hook-form';
import { TInputProps } from '../../types';

export type TInputName = 'first' | 'lastname' | 'city' | 'age' | 'username' | 'avatar';
export type TInputValue = Partial<Record<TInputName, string>>;

export type TInput = {
  value: string | undefined,
  name: TInputName,
  translateText: string,
  onChange: (value: string) => void
};

export type TProfileInputProps = {
  errors: FieldErrors<TInputValue>,
  profileData: TUser,
  isReadOnly?: boolean,
  isLoading?: boolean,
  control: Control<TInputValue>
} & TInputProps;
