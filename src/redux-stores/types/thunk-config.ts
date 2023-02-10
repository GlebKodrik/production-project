import { TThunkExtraArg } from './thunk-extra-arg';
import { TReduxStateScheme } from './redux-state-scheme';

export type TThunkConfig<T> = {
  rejectValue: T,
  extra: TThunkExtraArg,
  state: TReduxStateScheme
};
