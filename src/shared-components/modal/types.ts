import { ReactNode } from 'react';

export type TModalProps = {
  className?: string,
  children?: ReactNode,
  isOpen: boolean,
  onClose: (isOpen: boolean) => void;
};
