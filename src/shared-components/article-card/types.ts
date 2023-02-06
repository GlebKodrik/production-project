import { TColor } from '../../types/color';

export type TVariantView = 'small' | 'big';

export type TProps = {
  variant?: TVariantView,
  paragraph?: string,
} & TArticleCard;

export type TArticleCard = {
  views?: number,
  createdAt?: string,
  types: string[],
  image?: string,
  title: string,
  color: TColor,
  to: string,
  className?: string
  user?: {
    id?: string,
    username?: string,
    avatar?: string
  }
  ,
};
