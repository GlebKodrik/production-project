import { TVariantView } from 'shared-components/article-card';
import { TIconNames } from 'shared-components/icon';
import { TPaletteColor } from 'types/palette-color';

export type TProps = {
  variantView: TVariantView,
  className?: string,
  onClick: (value: TVariantView) => void,
  color?: TPaletteColor
};

export type TVariantViewTypes = {
  icon: TIconNames,
  variantViewName: TVariantView
};
