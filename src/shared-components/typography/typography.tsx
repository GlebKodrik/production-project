import React from 'react';
import cls from 'classnames';

import styles from './typography.module.scss';
import { TTypographyProps } from './types';

export const Typography = React.memo((
  {
    className,
    children,
    color = 'primary',
    size = 'medium',
    tag,
  }: TTypographyProps,
) => {
  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
    [styles[`size-${size}`]]: Boolean(size),
  };

  const Tag = tag || 'p';
  return (
    <Tag
      className={cls(styles.typography, classes, className)}
    >
      {children}
    </Tag>
  );
});
