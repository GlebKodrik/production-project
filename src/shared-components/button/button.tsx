import React from 'react';
import cls from 'classnames';

import styles from './button.module.scss';
import { TButtonProps } from './types';

export const Button = React.forwardRef((
  {
    type = 'button',
    className,
    children,
    color = 'secondary',
    size = 'medium',
    variant = 'clear',
    disabled = false,
    ...otherProps
  }: TButtonProps,
  ref,
) => {
  const classes = {
    [styles[`variant-${variant}`]]: Boolean(variant),
    [styles[`color-${color || 'transparent'}`]]: Boolean(color),
    [styles[`size-${size}`]]: Boolean(size),
  };
  return (
    <button
      ref={ref}
      type={type}
      className={cls(styles.button, classes, className)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
