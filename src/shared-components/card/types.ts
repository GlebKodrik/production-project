import { EArticleType } from '../../pages/articles/types';
import { TUser } from '../../redux-stores/stores/user/types';

export type TVariantView = 'small' | 'big';

export type TProps = {
  variant?: TVariantView,
  paragraph?: string,
} & TArticleCard;

export type TArticleCard = {
  views?: number,
  createdAt?: string,
  types: EArticleType[],
  image?: string,
  title: string,
  color: TColorButton,
  to: string,
  className?: string
  user?: TUser,
};

type TColorButton = 'primary' | 'secondary' ;
