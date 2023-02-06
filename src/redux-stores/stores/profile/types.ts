import { TCurrency } from 'shared-components/currency/types';
import { TCountry } from '../../../shared-components/country/types';

export type TUser = {
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
  data?: TUser;
  isLoading: boolean;
  error?: string;
  isReadOnly: boolean;
  editForm?: TUser
  saveProfile: {
    isLoading: boolean
  }
};
