import { ReactNode } from 'react';

export type TProps = {
  onClose: () => void,
  className?: string,
  children: ReactNode,
  isOpen: boolean
};
