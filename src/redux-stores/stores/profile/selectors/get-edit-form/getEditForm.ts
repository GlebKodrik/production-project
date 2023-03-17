import { TReduxStateScheme } from '@/redux-stores/types/redux-state-scheme';

export const getEditForm = (state: TReduxStateScheme) => state.profile?.editForm;
