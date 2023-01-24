import { TArticle } from 'entities/articles/types';

export type TArticleScheme = {
  isLoading: boolean,
  error?: string,
  data?: TArticle
};
