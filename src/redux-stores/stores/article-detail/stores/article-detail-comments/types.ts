import { TComment } from '../../types';

export type TArticleDetailCommentsScheme = {
  data: TComment[],
  isLoading: boolean,
  error: string | undefined,
  isFinish: boolean,
  sendComment: {
    isLoading: boolean,
  },
};
