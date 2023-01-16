import { ReactElement } from 'react';
import { TCurrency } from 'shared-components/currency/types';
import { TCountry } from 'shared-components/country/types';
import { TProfile } from '../stores/profile/types';

export type TProfileCard = {
  profileData?: TProfile;
  onInputNameChange: (value: string) => void;
  onInputSurnameChange: (value: string) => void;
  onInputUsernameChange: (value: string) => void;
  onInputCityChange: (value: string) => void;
  onInputAgeChange: (value: string) => void;
  onInputAvatarChange: (value: string) => void;
  onChangeCurrencyValue: (value: TCurrency) => void;
  onChangeCountryValue: (value: TCountry) => void;
  onProfileSave: () => void;
  isLoading: boolean;
  spinner?: ReactElement;
  isReadOnly?: boolean;
};
