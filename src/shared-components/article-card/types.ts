import { TUser } from '../../redux-stores/stores/user/types';
import type { TArticlesTypes } from '../../redux-stores/stores/articles/types';
import { TColor } from '../../types/color';

export type TVariantView = 'small' | 'big';

export type TProps = {
  variant?: TVariantView,
  paragraph?: string,
} & TArticleCard;

export type TArticleCard = {
  views?: number,
  createdAt?: string,
  types: TArticlesTypes[],
  image?: string,
  title: string,
  color: TColor,
  to: string,
  className?: string
  user?: TUser,
};
