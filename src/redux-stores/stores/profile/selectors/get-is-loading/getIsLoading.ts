import { TReduxStateScheme } from '@/redux-stores/types/redux-state-scheme';

export const getIsLoading = (state: TReduxStateScheme) => state.profile?.isLoading || false;
