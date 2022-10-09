import React from 'react';

import cls from 'classnames';
import styles from './loader.module.scss';

import { TLoaderProps } from './types';

const Loader: React.FC<TLoaderProps> = ({ className }) => (
  <div className={cls(styles.ldsEllipsis, className)}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
