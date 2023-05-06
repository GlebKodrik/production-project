import React, { useState } from 'react';
import cn from 'classnames';
import { TProps } from './types';
import createRange from '@/utils/create-range';
import { Icon } from '@/shared-components/icon';
import styles from './star-rating.module.scss';

export const StarRating = ({
  className, selectStar = 1, onSelect, amountStar = 5, size = 40,
}: TProps) => {
  const [hoverStarId, setHoverStarId] = useState(selectStar);
  const onClickStar = (starId: number) => () => {
    onSelect(starId);
  };
  const onStarLeave = () => {
    setHoverStarId(1);
  };
  const onStarHover = (starId: number) => () => {
    setHoverStarId(starId);
  };
  return (
    <div className={className}>
      {createRange(amountStar).map((starId) => (
        <Icon
          onMouseLeave={onStarLeave}
          onMouseEnter={onStarHover(starId)}
          name="star"
          key={starId}
          onClick={onClickStar(starId)}
          className={cn(
            { [styles.paint]: hoverStarId >= starId },
            { [styles.paint]: selectStar >= starId },
            styles.starIcon,
          )}
          width={size}
          height={size}
        />
      ))}
    </div>
  );
};
