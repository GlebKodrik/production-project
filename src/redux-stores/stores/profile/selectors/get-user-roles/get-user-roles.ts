import { TReduxStateScheme } from '../../../../types/redux-state-scheme';

export const getIsAdmin = (state: TReduxStateScheme) => state.user.userData?.role === 'ADMIN';
export const getIsUser = (state: TReduxStateScheme) => state.user.userData?.role === 'USER';
export const getUserRole = (state: TReduxStateScheme) => state.user.userData?.role;
