import { TReduxStateScheme } from '../../../types/redux-state-scheme';

export const getArticles = (state: TReduxStateScheme) => state.articles?.data;
export const getArticlesIsLoading = (state: TReduxStateScheme) => state.articles?.isLoading;
