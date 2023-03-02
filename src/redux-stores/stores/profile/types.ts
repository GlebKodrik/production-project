import { TCurrency } from 'shared-components/currency/types';
import { TCountry } from '../../../shared-components/country/types';

export enum EUserRole {
  'ADMIN' = 'ADMIN',
  'USER' = 'USER',
}

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
  role?: EUserRole
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
