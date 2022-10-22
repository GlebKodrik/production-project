import { LinkProps } from 'react-router-dom';

type TLinkColor = 'primary' | 'inverted' | 'secondary';

export interface TLinkProps extends LinkProps {
  className?: string,
  color?: TLinkColor
}
