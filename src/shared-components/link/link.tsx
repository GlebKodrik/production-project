import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import cls from 'classnames';
import style from './link.module.scss';
import { TLinkProps } from './types';

export const Link = React.memo(({
  className,
  color = 'primary',
  to,
  children,
  ...otherProps
}: TLinkProps) => (
  <ReactLink
    to={to}
    className={cls(
      style.link,
      className,
      { [style[color]]: color },
    )}
    {...otherProps}
  >
    {children}
  </ReactLink>
));
