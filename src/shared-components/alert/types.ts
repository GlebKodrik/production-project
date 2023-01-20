import { ReactNode } from 'react';

export type TSeverity = 'success' | 'error';

export type TAlertProps = {
  onClose?: Function;
  severity: TSeverity;
  children: ReactNode;
  autoClose?: boolean;
  isOpen?: boolean;
  isPopUp?: boolean;
  autoHideDuration?: number;
  classNames?: string;
};
