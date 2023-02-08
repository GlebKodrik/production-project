import { TArticle } from '../../../types/articles';

export type TArticleDetailRecommendsScheme = {
  isLoading: boolean,
  error?: string,
  data: TArticle[],
  isFinish: boolean
};
