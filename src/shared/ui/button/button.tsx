import React from 'react';
import cls from 'classnames';

import styles from './button.module.scss';
import { TButtonProps } from './types';

export const Button: React.FC<TButtonProps> = (
  {
    type = 'button',
    clear,
    className,
    children,
    color,
    size,
    square,
    variant,
    ...otherProps
  },
) => {
  const MODS = {
    [styles.clearButton]: clear,
    [styles.square]: square,
    [styles[variant]]: Boolean(variant),
    [styles[color]]: Boolean(color),
    [styles[size]]: Boolean(size),
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
