import { TReduxStateScheme } from '@stores/types/redux-state-scheme';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';

export type TCreateReduxStore = {
  initialState?: TReduxStateScheme;
  navigation?: (to: To, options?: NavigateOptions) => void;
};
