import React, { CSSProperties, useMemo } from 'react';
import cn from 'classnames';
import styles from './avatar.module.scss';
import { TAvatarProps } from './types';

export const Avatar = React.memo((
  {
    size,
    alt,
    src,
    border = false,
    className,
  }: TAvatarProps,
) => {
  const customStyles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <div className={cn(styles.wrapper, { [styles.border]: border }, className)}>
      <img
        src={src}
        alt={alt}
        style={customStyles}
        className={styles.avatar}
      />
    </div>
  );
});
