import { TArticle } from 'pages/articles/types';

export type TArticleScheme = {
  isLoading: boolean,
  error?: string,
  data?: TArticle
};
