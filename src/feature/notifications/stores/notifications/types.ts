import { TSeverity } from '../../../../shared-components/alert';

export type TNotification = {
  id?: number | string;
  message: string;
  severity: TSeverity;
};

export type TNotificationsState = {
  notifications: TNotification[];
};
