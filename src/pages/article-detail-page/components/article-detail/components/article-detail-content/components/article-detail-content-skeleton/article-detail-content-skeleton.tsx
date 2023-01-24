import React from 'react';
import { Skeleton } from 'shared-components/skeleton';
import styles from './article-detail-content-skeleton.module.scss';

export const ArticleDetailContentSkeleton: React.FC = () => (
  <>
    <Skeleton className={styles.avatar} width={180} height={180} border="50%" />
    <Skeleton className={styles.title} width={300} height={32} />
    <Skeleton className={styles.skeleton} width={600} height={26} />
    <Skeleton className={styles.skeleton} width="100%" height={200} />
    <Skeleton className={styles.skeleton} width="100%" height={200} />
  </>
);
