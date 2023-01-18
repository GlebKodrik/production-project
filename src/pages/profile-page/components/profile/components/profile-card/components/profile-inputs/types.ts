import { TCurrency } from 'shared-components/currency/types';
import { TCountry } from 'shared-components/country/types';
import { UseFormSetValue } from 'react-hook-form/dist/types/form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import { TProfile } from '../../../../stores/profile/types';

export type TInputName = 'first' | 'lastname' | 'city' | 'age' | 'username' | 'avatar';

export type TInput = {
  value: string | undefined,
  name: TInputName,
  translateText: string,
  onChange: (value: string) => void
};

export type TProfileInput = {
  profileData?: TProfile;
  onInputNameChange: (value: string) => void;
  onInputSurnameChange: (value: string) => void;
  onInputUsernameChange: (value: string) => void;
  onInputCityChange: (value: string) => void;
  onInputAgeChange: (value: string) => void;
  onInputAvatarChange: (value: string) => void;
  onChangeCurrencyValue: (value: TCurrency) => void;
  onChangeCountryValue: (value: TCountry) => void;
  isReadOnly?: boolean;
};

export type TProfileInputProps = {
  errors: FieldErrors<any>;
  setValue: UseFormSetValue<any>;
  profileData: TProfile;
  onInputNameChange: (value: string) => void;
  onInputSurnameChange: (value: string) => void;
  onInputUsernameChange: (value: string) => void;
  onInputCityChange: (value: string) => void;
  onInputAgeChange: (value: string) => void;
  onInputAvatarChange: (value: string) => void;
  isReadOnly?: boolean;
};
