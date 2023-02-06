import React from 'react';
import { Button } from 'shared-components/button';
import { Icon } from 'shared-components/icon';
import { TVariantView } from 'shared-components/article-card';
import { TProps, TVariantViewTypes } from './types';

const variantViewTypes: TVariantViewTypes[] = [
  { variantViewName: 'big', icon: 'list' },
  { variantViewName: 'small', icon: 'tiled' },
];
export const ArticleVariantView = ({
  variantView,
  className,
  onClick,
  color = 'primary',
}: TProps) => {
  const onButtonClick = (variantViewName: TVariantView) => () => {
    onClick(variantViewName);
  };

  const getIsCurrentView = (variantViewName: TVariantView) => variantView !== variantViewName;
  return (
    <div className={className}>
      {variantViewTypes.map((
        { icon, variantViewName },
      ) => getIsCurrentView(variantViewName) && (
      <Button onClick={onButtonClick(variantViewName)} color={color} key={variantViewName}>
        <Icon name={icon} fill={color} width={20} height={20} />
      </Button>
      ))}
    </div>
  );
};
