import { TCurrency } from 'shared-components/currency/types';
import { TCountry } from '../../../shared-components/country/types';

export type TProfile = {
  id?: string;
  first?: string;
  lastname?: string;
  age?: string;
  currency?: TCurrency;
  country?: TCountry;
  city?: string;
  username?: string;
  avatar?: string;
};

export type TProfileSchema = {
  data?: TProfile;
  isLoading: boolean;
  error?: string;
  isReadOnly: boolean;
  editForm?: TProfile
  saveProfile: {
    isLoading: boolean
  }
};
