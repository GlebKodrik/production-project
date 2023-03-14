import { ReactNode } from 'react';
import { Placement } from '@floating-ui/react-dom';

export type TProps = {
  trigger: ReactNode,
  className?: string,
  children: ReactNode,
  placement?: Placement,
  indent?: number
};
