import React, { CSSProperties } from 'react';
import cn from 'classnames';
import styles from './skeleton.module.scss';
import { TSkeletonProps } from './types';

export const Skeleton = React.memo((
  {
    className,
    width,
    border,
    height,
  }: TSkeletonProps,
) => {
  const classes: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return (
    <div className={cn(styles.skeleton, className)} style={classes} />
  );
});
