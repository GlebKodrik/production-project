import { TArticle } from 'pages/articles/types';
import { TVariantView } from '../../../shared-components/card';

export type TArticlesScheme = {
  isLoading: boolean,
  error?: string,
  data?: TArticle[],
  variantView: TVariantView
};
