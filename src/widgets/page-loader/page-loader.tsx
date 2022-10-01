import React from 'react';

import styles from './page-loader.module.scss';

import { TPageLoaderProps } from './types';
import Loader from '../../shared/ui/loader';

const PageLoader: React.FC<TPageLoaderProps> = ({ className }) => (
  <div className={styles.wrapper}>
    <Loader className={className} />
  </div>
);

export default PageLoader;
