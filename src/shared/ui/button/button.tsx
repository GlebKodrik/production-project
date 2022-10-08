import React from 'react';
import cls from '../../lib/class-names';

import styles from './button.module.scss';
import { TAppButton } from './types';

export const Button: React.FC<TAppButton> = ({
  clear,
  className,
  children,
  theme,
  ...otherProps
}) => (
  <button
    type="button"
    className={cls(
      styles.button,
      { [styles.clearButton]: clear },
      [className, styles[theme]],
    )}
    {...otherProps}
  >
    {children}
  </button>
);
