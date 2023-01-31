import { ReactNode } from 'react';
import { TArticleCard } from '../../types';

export type TProps = {
  renderViews: () => ReactNode,
} & TArticleCard;
