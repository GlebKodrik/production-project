import type { TReduxStateScheme } from '@stores/types/redux-state-scheme';

export const getPassword = (state: TReduxStateScheme) => state.loginForm.password;
