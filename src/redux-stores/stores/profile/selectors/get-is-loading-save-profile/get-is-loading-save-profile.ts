import { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';

export const getIsLoadingSaveProfile = (state: TReduxStateScheme) => state.profile?.saveProfile.isLoading || false;
