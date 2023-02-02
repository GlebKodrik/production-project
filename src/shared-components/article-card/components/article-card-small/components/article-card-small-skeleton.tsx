import React from 'react';
import cn from 'classnames';
import { Skeleton } from '../../../../skeleton';
import styles from './article-card-small-skeleton.module.scss';
import { TProps } from './types';

export const ArticleCardSmallSkeleton = ({ className }: TProps) => (
  <div className={cn(styles.wrapper, className)}>
    <Skeleton height="200px" width="200px" />
    <Skeleton height="20px" width="100px" className={styles.title} />
    <Skeleton height="20px" width="170px" className={styles.title} />
  </div>
);
