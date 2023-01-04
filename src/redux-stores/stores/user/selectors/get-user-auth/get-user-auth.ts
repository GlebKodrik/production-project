import type { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';

export const getUserAuth = (state: TReduxStateScheme) => state.user.isAuth;
