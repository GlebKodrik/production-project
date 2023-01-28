import type { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';

export const getUser = (state: TReduxStateScheme) => state.user.userData;
