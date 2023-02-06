import type { TReduxStateScheme } from '../../../types/redux-state-scheme';

export const getSortBy = (state: TReduxStateScheme) => state.articles.filters.sortBy;
export const getOrder = (state: TReduxStateScheme) => state.articles.filters.order;
export const getSearch = (state: TReduxStateScheme) => state.articles.filters.search;
export const getVariantView = (state: TReduxStateScheme) => state.articles?.filters.variantView;
export const getType = (state: TReduxStateScheme) => state.articles?.filters.type;
