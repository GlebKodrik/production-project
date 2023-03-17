import React from 'react';
import { useLanguage } from '@/hooks/use-language';
import styles from './not-found-page.module.scss';
import { TNotFoundProps } from './types';

export const NotFoundPage: React.FC<TNotFoundProps> = ({ text }) => {
  const { translation } = useLanguage();

  return (
    <div className={styles.wrapper}>
      {text || translation('notFound')}
    </div>
  );
};
