import React from 'react';

import styles from './text-code-error.module.scss';
import { TextCodeErrorProps } from './types';

const TextCodeError: React.FC<TextCodeErrorProps> = ({ children, maxHeight = 'auto' }) => (
  <div className={styles.wrapper} style={{ maxHeight }}>{children}</div>
);

export default TextCodeError;
