import type { TReduxStateScheme } from '../../../../types/redux-state-scheme';

export const getUserAuth = (state: TReduxStateScheme) => state.user.isAuth;
