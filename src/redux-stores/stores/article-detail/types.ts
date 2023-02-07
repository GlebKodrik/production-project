import { TArticle } from '../types/articles';
import { TUser } from '../profile/types';
import { TArticleDetailRecommendScheme } from './stores/article-detail-recommend';

export type TArticleScheme = {
  recommends: TArticleDetailRecommendScheme,
  article: TArticleDetailScheme,
};

export type TArticleDetailScheme = {
  isLoading: boolean,
  error?: string,
  data?: TArticle
  comments: {
    data?: TComment[],
    isLoading: boolean,
    error?: string,
    isFinish: boolean,
    sendComment: {
      isLoading: boolean,
    },
  }
};

export type TComment = {
  user: TUser,
  id: string,
  text: string,
};
