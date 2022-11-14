export type TNotification = {
  id?: number | string;
  message?: string
};

export type TNotificationsState = {
  notifications: TNotification[]
};
