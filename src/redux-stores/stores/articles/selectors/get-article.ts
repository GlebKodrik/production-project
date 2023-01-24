import { TReduxStateScheme } from '../../../types/redux-state-scheme';

export const getArticle = (state: TReduxStateScheme) => state.article?.data;
export const getArticleIsLoading = (state: TReduxStateScheme) => state.article?.isLoading;
export const getArticleError = (state: TReduxStateScheme) => state.article?.error;
