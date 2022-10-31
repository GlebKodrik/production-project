import React from 'react';
import styles from './not-found-page.module.scss';
import { TNotFoundProps } from './types';
import { useLanguage } from '../../hooks/use-language';

const NotFoundPage: React.FC<TNotFoundProps> = ({ text }) => {
  const { translation } = useLanguage();
  return (
    <div className={styles.wrapper}>
      {text || translation('notFound')}
    </div>
  );
};

export default NotFoundPage;
