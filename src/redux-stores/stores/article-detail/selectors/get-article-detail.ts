import { TReduxStateScheme } from '../../../types/redux-state-scheme';

export const getArticleDetail = (state: TReduxStateScheme) => state.articleDetail?.article?.data;
export const getArticleIsLoading = (state: TReduxStateScheme) => state.articleDetail?.article?.isLoading;
export const getArticleError = (state: TReduxStateScheme) => state.articleDetail?.article?.error;
