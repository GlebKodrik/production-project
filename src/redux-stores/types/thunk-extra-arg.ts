import { AxiosInstance } from 'axios';
import { To } from 'react-router-dom';
import { NavigateOptions } from 'react-router';

export type TThunkExtraArg = {
  api: AxiosInstance,
  navigation?: (to: To, options?: NavigateOptions) => void;
};
