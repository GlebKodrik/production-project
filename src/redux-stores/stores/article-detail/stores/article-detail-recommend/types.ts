import { TArticle } from '../../../types/articles';

export type TArticleDetailRecommendScheme = {
  isLoading: boolean,
  error?: string,
  data: TArticle[],
  isFinish: boolean
};
