import { TArticle } from 'pages/articles/types';
import { TUser } from '../user/types';

export type TArticleDetailScheme = {
  isLoading: boolean,
  error?: string,
  data?: TArticle
  comments: {
    data?: TComment[],
    isLoading: boolean,
    error?: string,
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
