import type { TReduxStateScheme } from '../../../../../redux-stores/types/redux-state-scheme';

export const getNotifications = (state: TReduxStateScheme) => (state.notifications.notifications);
