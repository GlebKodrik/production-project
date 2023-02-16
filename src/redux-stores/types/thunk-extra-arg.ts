import { AxiosInstance } from 'axios';

export type TThunkExtraArg = {
  api: AxiosInstance,
  setSearchParams?: any,
  searchParams?: URLSearchParams,
};
