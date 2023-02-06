import { TUser } from '../profile/types';

export type TUserScheme = {
  userData?: TUser;
  isAuth: boolean;
  mounted: boolean;
};
