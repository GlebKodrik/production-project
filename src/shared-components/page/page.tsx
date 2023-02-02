import React from 'react';
import { TProps } from './types';
import styles from './page.module.scss';

export const Page = ({ children, ...otherProps }: TProps) => (
  <div className={styles.wrapper} {...otherProps}>
    {children}
  </div>
);
