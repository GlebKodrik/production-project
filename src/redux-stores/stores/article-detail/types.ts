import { TArticle } from '../types/articles';
import { TUser } from '../profile/types';
import { TArticleDetailRecommendsScheme } from './stores/article-detail-recommends';
import type { TArticleDetailCommentsScheme } from './stores/article-detail-comments';

export type TArticleScheme = {
  recommends: TArticleDetailRecommendsScheme,
  article: TArticleDetailScheme,
  comments: TArticleDetailCommentsScheme
};

export type TArticleDetailScheme = {
  isLoading: boolean,
  error?: string,
  data?: TArticle
};

export type TComment = {
  user: TUser,
  id: string,
  text: string,
};
