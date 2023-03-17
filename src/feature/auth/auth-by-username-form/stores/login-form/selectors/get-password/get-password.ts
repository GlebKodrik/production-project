import type { TReduxStateScheme } from '@/redux-stores/types/redux-state-scheme';

export const getPassword = (state: TReduxStateScheme) => state.loginForm.password;
