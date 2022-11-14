import type { TReduxStateScheme } from '../../../../../redux/types/redux-state-scheme';

export const getNotifications = (state: TReduxStateScheme) => (state.notifications.notifications);
