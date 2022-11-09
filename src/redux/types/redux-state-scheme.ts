import { TCounterState } from '../stores/counter';
import { TUserState } from '../stores/user';

export type TReduxStateScheme = {
  counter: TCounterState,
  user: TUserState
};
