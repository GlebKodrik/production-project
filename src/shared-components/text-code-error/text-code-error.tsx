import React from 'react';

import styles from './text-code-error.module.scss';
import { TTextCodeErrorProps } from './types';

const TextCodeError: React.FC<TTextCodeErrorProps> = ({ children, maxHeight = 'auto' }) => (
  <div className={styles.wrapper} style={{ maxHeight }}>{children}</div>
);

export default TextCodeError;
