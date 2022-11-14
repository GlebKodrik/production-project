import { notificationsSlice, notificationsActions } from './slices/notifications-slice';
import { TNotificationsState } from './types';
import { getNotifications } from './selectors/get-notifications';

export {
  notificationsSlice,
  TNotificationsState,
  getNotifications,
  notificationsActions,
};
