import React from 'react';
import { Typography } from '../../shared-components/typography';
import { useLanguage } from '../../hooks/use-language';
import styles from './not-enough-rights.module.scss';

export const NotEnoughRights = () => {
  const { translation } = useLanguage();
  return (
    <div className={styles.wrapper}>
      <Typography size="large">{translation('notEnoughRights')}</Typography>
    </div>
  );
};
