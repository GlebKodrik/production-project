import type { TReduxStateScheme } from '../../../types/redux-state-scheme';

export const getArticles = (state: TReduxStateScheme) => state.articles?.data;
export const getArticlesIsLoading = (state: TReduxStateScheme) => state.articles?.isLoading;
export const getArticlesIsFinished = (state: TReduxStateScheme) => state.articles?.isFinished;
export const getArticlesPage = (state: TReduxStateScheme) => state.articles.page;
export const getArticlesIsHasMore = (state: TReduxStateScheme) => state.articles.isHasMore;
export const getArticlesLimited = (state: TReduxStateScheme) => state.articles.limit;
