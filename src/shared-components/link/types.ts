import { LinkProps } from 'react-router-dom';
import { ReactNode } from 'react';

type TLinkColor = 'primary' | 'inverted' | 'secondary';

export interface TLinkProps extends LinkProps {
  className?: string,
  color?: TLinkColor,
  children: ReactNode,
}
