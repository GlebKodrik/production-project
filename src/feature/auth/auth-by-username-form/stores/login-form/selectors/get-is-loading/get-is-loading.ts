import type { TReduxStateScheme } from '@stores/types/redux-state-scheme';

export const getIsLoading = (state: TReduxStateScheme) => state.loginForm.isLoading;
