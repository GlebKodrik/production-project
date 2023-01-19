import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { TProfile } from '../../../../stores/profile/types';
import { TInputProps } from '../../types';

export type TInputName = 'first' | 'lastname' | 'city' | 'age' | 'username' | 'avatar';
export type TInputValue = Partial<Record<TInputName, string>>;

export type TInput = {
  value: string | undefined,
  name: TInputName,
  translateText: string,
  onChange: (value: string) => void
};

export type TInputChange = {
  name: string,
  inputValue: string,
  onChange: (value: string) => void,
};

export type TProfileInputProps = {
  errors: FieldErrors<TInputValue>,
  setValue: UseFormSetValue<any>,
  profileData: TProfile,
  isReadOnly?: boolean,
  isLoading?: boolean,
} & TInputProps;
