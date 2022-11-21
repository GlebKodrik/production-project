import type { TReduxStateScheme } from '../../../../../stores/types/redux-state-scheme';

export const getNotifications = (state: TReduxStateScheme) => (state.notifications.notifications);
