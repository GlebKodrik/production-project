import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import cls from 'classnames';
import style from './link.module.scss';
import { TLinkProps } from './types';

export const Link: React.FC<TLinkProps> = ({
  className,
  color,
  to,
  children,
  ...otherProps
}) => (
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
);
