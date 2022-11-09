import React from 'react';
import cls from 'classnames';

import styles from './button.module.scss';
import { TButtonProps } from './types';

export const Button: React.FC<TButtonProps> = (
  {
    type = 'button',
    className,
    children,
    color,
    size,
    variant = 'clear',
    ...otherProps
  },
) => {
  const MODS = {
    [styles[`variant-${variant}`]]: Boolean(variant),
    [styles[color]]: Boolean(color),
    [styles[`size-${size}`]]: Boolean(size),
  };

  return (
    <button
      type={type}
      className={cls(styles.button, MODS, className)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
