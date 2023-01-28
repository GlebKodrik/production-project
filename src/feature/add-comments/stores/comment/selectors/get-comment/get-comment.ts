import { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';

export const getComment = (state: TReduxStateScheme) => state.comment?.comment || '';
