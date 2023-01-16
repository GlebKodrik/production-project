import React, { CSSProperties, useMemo } from 'react';
import styles from './avatar.module.scss';
import { TAvatarProps } from './types';

export const Avatar = React.memo((
  {
    size = 180,
    alt,
    src,
  }: TAvatarProps,
) => {
  const customStyles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <div className={styles.wrapper}>
      <img
        src={src}
        alt={alt}
        style={customStyles}
        className={styles.avatar}
      />
    </div>
  );
});
