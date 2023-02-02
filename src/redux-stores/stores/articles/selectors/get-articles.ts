import { TReduxStateScheme } from '../../../types/redux-state-scheme';

export const getArticles = (state: TReduxStateScheme) => state.articles?.data;
export const getArticlesIsLoading = (state: TReduxStateScheme) => state.articles?.isLoading;
export const getArticlesIsFinished = (state: TReduxStateScheme) => state.articles?.isFinished;
export const getArticlesPage = (state: TReduxStateScheme) => state.articles.page;
export const getArticlesIsHowMore = (state: TReduxStateScheme) => state.articles.isHowMore;
