import { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';

export const getError = (state: TReduxStateScheme) => state.profile?.error;
