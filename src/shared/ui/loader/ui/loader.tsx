import React from 'react';

import styles from './loader.module.scss';

import { TLoaderProps } from './types';

import cls from '../../../lib/class-names';

const Loader: React.FC<TLoaderProps> = ({ className }) => (
  <div className={cls(styles.ldsEllipsis, {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
