import type { TReduxStateScheme } from '@stores/types/redux-state-scheme';

export const getUsername = (state: TReduxStateScheme) => state.loginForm.username;
