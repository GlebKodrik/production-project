import React from 'react';
import cn from 'classnames';
import { TProps } from './types';

import { Overlay } from '../overlay';
import styles from './drawe.module.scss';
import Portal from '../../portal';

export const Drawer = ({
  onClose, className, children, isOpen,
}: TProps) => (
  <Portal>
    <div className={cn(className, styles.drawer, { [styles.opened]: isOpen })}>
      <Overlay onClick={onClose} />
      <div
        className={styles.content}
      >
        {children}
      </div>
    </div>
  </Portal>
);
