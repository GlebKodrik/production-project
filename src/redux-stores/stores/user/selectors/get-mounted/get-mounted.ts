import type { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';

export const getMounted = (state: TReduxStateScheme) => state.user.mounted;
