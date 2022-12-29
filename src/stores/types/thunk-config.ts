import { TThunkExtraArg } from '@stores/types/thunk-extra-arg';

export type TThunkConfig<T> = {
  rejectValue: T,
  extra: TThunkExtraArg
};
