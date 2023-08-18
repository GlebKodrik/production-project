import { notificationsSlice, notificationsActions } from './slices/notifications-slice';
import type { TNotificationsState } from './types';
import { getNotifications } from './selectors/get-notifications';

export {
  notificationsSlice,
  TNotificationsState,
  getNotifications,
  notificationsActions,
};
