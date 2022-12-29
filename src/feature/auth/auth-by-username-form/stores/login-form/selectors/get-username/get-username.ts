import type { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';

export const getUsername = (state: TReduxStateScheme) => state.loginForm.username;
