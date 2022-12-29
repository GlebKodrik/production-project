import { TCurrency } from 'constants/currency';
import { TCountry } from 'constants/country';

export type TProfile = {
  first: string;
  lastname: string;
  age: 22,
  currency: TCurrency,
  country: TCountry;
  city: string,
  username: string;
  avatar: string;
};

export type TProfileSchema = {
  data?: TProfile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
};
