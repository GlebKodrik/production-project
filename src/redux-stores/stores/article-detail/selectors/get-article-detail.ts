import { TReduxStateScheme } from '../../../types/redux-state-scheme';

export const getArticleDetail = (state: TReduxStateScheme) => state.articleDetail?.data;
export const getArticleIsLoading = (state: TReduxStateScheme) => state.articleDetail?.isLoading;
export const getArticleError = (state: TReduxStateScheme) => state.articleDetail?.error;
