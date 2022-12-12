import type { TReduxStateScheme } from '@stores/types/redux-state-scheme';

export const getUserAuth = (state: TReduxStateScheme) => state.user.isAuth;
