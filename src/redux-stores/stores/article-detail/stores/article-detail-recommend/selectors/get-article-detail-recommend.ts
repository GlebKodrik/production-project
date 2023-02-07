import { TReduxStateScheme } from '../../../../../types/redux-state-scheme';

export const getArticleDetailRecommend = (
  state: TReduxStateScheme,
) => state.articleDetail?.recommends?.data || [];
export const getArticleDetailRecommendIsLoading = (
  state: TReduxStateScheme,
) => state.articleDetail?.recommends?.isLoading;
export const getArticleDetailRecommendIsFinish = (
  state: TReduxStateScheme,
) => state.articleDetail?.recommends?.isFinish;
