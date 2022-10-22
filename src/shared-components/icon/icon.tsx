import React from 'react';

import { TIconProps } from './types';
import { ICONS_COMPONENT } from './constants/icon-components';

const Icon: React.FC<TIconProps> = (
  {
    name,
    fill,
    opacity = 1,
    width = '24px',
    height = '24px',
    className,
  },
) => {
  const IconComponent = ICONS_COMPONENT[name];

  return (
    <IconComponent
      fill={fill}
      width={width}
      height={height}
      opacity={opacity}
      className={className}
    />
  );
};

export default Icon;
