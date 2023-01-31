import React from 'react';
import { Skeleton } from '../../../../skeleton';
import styles from './article-card-small-skeleton.module.scss';

export const ArticleCardSmallSkeleton = () => (
  <>
    <Skeleton height="200px" width="200px" />
    <Skeleton height="20px" width="100px" className={styles.title} />
    <Skeleton height="20px" width="170px" className={styles.title} />
  </>
);
