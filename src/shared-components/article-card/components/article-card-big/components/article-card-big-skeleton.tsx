import React from 'react';
import { Skeleton } from '../../../../skeleton';
import styles from './article-card-big-skeleton.module.scss';

export const ArticleCardBigSkeleton = () => (
  <>
    <div className={styles.wrapperHeader}>
      <Skeleton width="50px" height="50px" border="50%" />
      <Skeleton width="150px" height="16px" className={styles.username} />
      <Skeleton width="150px" height="16px" />
    </div>
    <Skeleton width="250px" height="24px" />
    <Skeleton height="250px" className={styles.image} />
    <div className={styles.wrapperReadMore}>
      <Skeleton width="200px" height="36px" />
    </div>
  </>
);
