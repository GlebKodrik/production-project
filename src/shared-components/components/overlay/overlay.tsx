import React, { CSSProperties } from 'react';
import cn from 'classnames';
import { TProps } from './types';
import styles from './overlay.module.scss';

export const Overlay = ({ onClick, className, backgroundColor = 'rgba(0 0 0 / 60%)' }: TProps) => {
  const style: CSSProperties = {
    backgroundColor,
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={onClick} className={cn(className, styles.overlay)} style={style} />
  );
};
