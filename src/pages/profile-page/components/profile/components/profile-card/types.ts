import { ReactElement } from 'react';
import { TCurrency } from '@/shared-components/currency/types';
import { TCountry } from '@/shared-components/country/types';
import { TUser } from '../../../../../../redux-stores/stores/profile/types';

export type TProfileCardProps = {
  onProfileSave: () => void;
  isLoading?: boolean;
  spinner?: ReactElement;
  profileEditData?: TUser;
  profileData?: TUser;
  onChangeCurrencyValue: (value: TCurrency) => void;
  onChangeCountryValue: (value: TCountry) => void;
  isReadOnly?: boolean;
  isProfileDataReceivedSuccessfully?: boolean;
  isEdit?: boolean
} & TButtonEditOrCancel & TInputProps;

export type TButtonEditOrCancel = {
  onButtonEdit: () => void;
  onButtonCancelEdit: () => void;
};

export type TInputProps = {
  onInputNameChange: (value: string) => void;
  onInputSurnameChange: (value: string) => void;
  onInputUsernameChange: (value: string) => void;
  onInputCityChange: (value: string) => void;
  onInputAgeChange: (value: string) => void;
  onInputAvatarChange: (value: string) => void;
};
