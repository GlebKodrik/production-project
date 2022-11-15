import { TSeverity } from './types';
import { TIconNames } from '../icon';

export const DEFAULT_TIME_IN_SECONDS_CLOSING_ALERT = 6;
export const DEFAULT_ANIMATION_IN_SECONDS = 500;

export const ICON_NAME_SEVERITY: Record<TSeverity, TIconNames> = {
  error: 'error-outline',
  success: 'check-circle-outline',
};
