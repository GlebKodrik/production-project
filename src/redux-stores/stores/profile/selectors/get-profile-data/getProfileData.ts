import { TReduxStateScheme } from '@/redux-stores/types/redux-state-scheme';

export const getProfileData = (state: TReduxStateScheme) => state.profile?.data;
