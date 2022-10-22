import React from 'react';

import styles from './code.module.scss';
import { TCodeProps } from './types';

const Code: React.FC<TCodeProps> = ({ children, maxHeight = 'auto' }) => (
  <div className={styles.wrapper} style={{ maxHeight }}>{children}</div>
);

export default Code;
