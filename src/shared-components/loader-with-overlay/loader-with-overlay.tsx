import React from 'react';

import styles from './loader-with-overlay.module.scss';

import { TPageLoaderProps } from './types';
import Loader from '../loader';

export const LoaderWithOverlay: React.FC<TPageLoaderProps> = ({ className }) => (
  <div className={styles.wrapper}>
    <Loader className={className} />
  </div>
);
