import React, { ButtonHTMLAttributes } from 'react';
import cls from '../../lib/class-names';

import styles from './button.module.scss';

enum TThemeButton {

}

interface TAppButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string,
  clear?: boolean,
  theme?: TThemeButton
}

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
