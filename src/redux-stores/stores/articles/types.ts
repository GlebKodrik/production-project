import { TArticle } from 'pages/articles/types';
import { TVariantView } from '../../../shared-components/article-card';

export type TArticlesScheme = {
  isLoading: boolean,
  error?: string,
  data: TArticle[],
  variantView: TVariantView,
  isFinished: boolean,
  // pagination
  limit: number,
  page: number,
  isHowMore: boolean
};
