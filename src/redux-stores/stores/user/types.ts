export type TUserScheme = {
  userData?: TUser;
  isAuth: boolean;
  mounted: boolean;
};

export type TUser = {
  id: string;
  username: string;
  avatar?: string;
};
