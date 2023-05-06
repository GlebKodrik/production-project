import React from 'react';
import cn from 'classnames';
import { TProps } from './types';
import styles from './textarea.module.scss';

export const Textarea = ({
  className,
  value,
  onChange,
  error,
  ...otherProps
}: TProps) => (
  // eslint-disable-next-line react/no-unknown-property
  <textarea
    value={value}
    onChange={onChange}
    className={cn(className, { [styles.error]: error })}
    {...otherProps}
  />
);
