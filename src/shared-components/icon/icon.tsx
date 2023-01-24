import React from 'react';

import cn from 'classnames';
import { TIconProps } from './types';
import { ICONS_COMPONENT } from './constants/icon-components';
import styles from './icon.module.scss';

export const Icon = React.memo((
  {
    name,
    fill = 'primary',
    opacity = 1,
    width = '24px',
    height = '24px',
    className,
  }: TIconProps,
) => {
  const IconComponent = ICONS_COMPONENT[name];
  // @ts-ignore
  const isHaveCurrenColorInStyles = styles[`color-${fill}`];

  const classes = {
    [isHaveCurrenColorInStyles]: Boolean(fill),
  };

  return (
    <IconComponent
      fill={!isHaveCurrenColorInStyles ? fill : ''}
      width={width}
      height={height}
      opacity={opacity}
      className={cn(classes, className)}
    />
  );
});
