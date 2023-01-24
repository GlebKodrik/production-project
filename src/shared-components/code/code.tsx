import React from 'react';
import cn from 'classnames';
import { TCodeProps } from './types';
import styles from './code.module.scss';
import { Button } from '../button';
import { Icon } from '../icon';

export const Code = ({
  children,
  className,
  color = 'primary',
}: TCodeProps) => {
  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
  };

  return (
    <pre className={cn(styles.code, className, classes)}>
      <Button className={styles.copyButton}><Icon name="copy" fill={color} /></Button>
      <code>
        {children}
      </code>
    </pre>

  );
};
