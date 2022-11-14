import { ReactNode } from 'react';

type TSeverity = 'success' | 'warning' | 'error';

export type TProps = {
  onClose?: Function;
  severity: TSeverity;
  children: ReactNode;
  autoClose?: boolean;
  isOpen?: boolean;
  isPopUp?: boolean;
  autoHideDuration?: number;
};
