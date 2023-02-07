import { TReduxStateScheme } from '../../../types/redux-state-scheme';

export const getIsLoadingSendComment = (
  state: TReduxStateScheme,
) => state.articleDetail?.article?.comments.sendComment.isLoading || false;
