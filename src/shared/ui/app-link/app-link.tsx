import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from '../../lib/class-names';
import style from './link.module.scss';

export enum ELinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface TLinkProps extends LinkProps {
  className?: string,
  theme?: ELinkTheme
}

export const AppLink: React.FC<TLinkProps> = ({
  className,
  theme,
  to,
  children,
  ...otherProps
}) => (
  <Link
    to={to}
    className={cls(style.appLink, {}, [className, style[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
);
