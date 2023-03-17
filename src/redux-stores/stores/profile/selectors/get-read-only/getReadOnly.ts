import { TReduxStateScheme } from '@/redux-stores/types/redux-state-scheme';

export const getReadOnly = (state: TReduxStateScheme) => state.profile?.isReadOnly;
