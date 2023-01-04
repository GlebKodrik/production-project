import React from 'react';
import cls from 'classnames';

import styles from './button.module.scss';
import { TButtonProps } from './types';

export const Button = React.memo((
  {
    type = 'button',
    className,
    children,
    color,
    size,
    variant = 'clear',
    disabled = false,
    ...otherProps
  }: TButtonProps,
) => {
  const classes = {
    [styles[`variant-${variant}`]]: Boolean(variant),
    [styles[`color-${color || 'transparent'}`]]: Boolean(color),
    [styles[`size-${size}`]]: Boolean(size),
  };

  return (
    <button
      type={type}
      className={cls(styles.button, classes, className)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
