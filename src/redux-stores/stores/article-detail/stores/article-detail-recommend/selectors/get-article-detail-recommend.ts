import { TReduxStateScheme } from '../../../../../types/redux-state-scheme';

export const getArticleDetailRecommend = (state: TReduxStateScheme) => state.articleDetailRecommend?.data || [];
export const getArticleDetailRecommendIsLoading = (state: TReduxStateScheme) => state.articleDetailRecommend?.isLoading;
export const getArticleDetailRecommendIsFinish = (state: TReduxStateScheme) => state.articleDetailRecommend?.isFinish;
