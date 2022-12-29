import { TThunkExtraArg } from 'redux-stores/types/thunk-extra-arg';

export type TThunkConfig<T> = {
  rejectValue: T,
  extra: TThunkExtraArg
};
