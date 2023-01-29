import React from 'react';
import cn from 'classnames';
import styles from '../../comment-card.module.scss';
import { Skeleton } from '../../../skeleton';
import { TProps } from './types';

export const ComponentCardSkeleton = ({
  color = 'primary',
  className,
}: TProps) => {
  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
  };
  return (
    <div className={cn(classes, className)}>
      <div className={styles.wrapperAvatar}>
        <Skeleton border="50%" width="40px" height="40px" className={styles.avatar} />
        <Skeleton width="150px" height="24px" />
      </div>
      <Skeleton width="300px" height="24px" className={styles.skeletonComment} />
    </div>
  );
};
