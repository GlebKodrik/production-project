import React, { CSSProperties } from 'react';
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
    fontSize,
  }: TTypographyProps,
) => {
  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
    [styles[`size-${size}`]]: Boolean(size),
  };

  const style: CSSProperties = {
    fontSize: `${fontSize}px`,
  };

  const Tag = tag || 'p';
  return (
    <Tag
      className={cls(styles.typography, classes, className)}
      style={style}
    >
      {children}
    </Tag>
  );
});
