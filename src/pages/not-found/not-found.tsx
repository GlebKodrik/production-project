import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './not-found.module.scss';
import { TNotFoundProps } from './types';

const NotFound: React.FC<TNotFoundProps> = ({ text }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      {text || t('notFound')}
    </div>
  );
};

export default NotFound;
