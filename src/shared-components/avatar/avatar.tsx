import React, { CSSProperties, useMemo } from 'react';
import cn from 'classnames';
import notFound from 'assets/image/no-user.png';
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
    <div className={cn(styles.wrapper, { [styles.border]: border }, className)} style={customStyles}>
      <img
        src={src || notFound}
        alt={alt}
        className={styles.avatar}
      />
    </div>
  );
});
