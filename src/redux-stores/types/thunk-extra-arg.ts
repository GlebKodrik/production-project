import { AxiosInstance } from 'axios';
import { To, NavigateOptions } from 'react-router-dom';

export type TThunkExtraArg = {
  api: AxiosInstance,
  navigation?: (to: To, options?: NavigateOptions) => void;
};
