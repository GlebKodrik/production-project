import React from 'react';
import { Skeleton } from '@/shared-components/skeleton';
import styles from './article-detail-content-skeleton.module.scss';

export const ArticleDetailContentSkeleton: React.FC = () => (
  <>
    <Skeleton className={styles.avatar} width="180px" height="180px" border="50%" />
    <Skeleton className={styles.title} width="300px" height="32px" />
    <Skeleton className={styles.skeleton} width="600px" height="32px" />
    <Skeleton className={styles.skeleton} width="100%" height="200px" />
    <Skeleton className={styles.skeleton} width="100%" height="200px" />
  </>
);
