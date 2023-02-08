import type { TReduxStateScheme } from '../../../types/redux-state-scheme';

export const getIsCreatorArticle = (
  state: TReduxStateScheme,
) => state.articleDetail?.article?.data?.userId === state.user?.userData?.id;
