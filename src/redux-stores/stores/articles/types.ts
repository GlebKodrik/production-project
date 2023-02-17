import { TVariantView } from '../../../shared-components/article-card';
import { TOrderFilter } from '../types/types';
import { TArticle, TArticlesTypes } from '../types/articles';

export type TArticlesScheme = {
  isLoading: boolean,
  error?: string,
  data: TArticle[],
  isFinished: boolean,
  isInit: boolean,
  // pagination
  limit: number,
  page: number,
  isHasMore: boolean
  // filter
  filters: TFilters
};

export type TFilters = {
  sortBy: EArticlesSort,
  order: TOrderFilter,
  variantView: TVariantView,
  search: string,
  type: TArticlesTypes
};

export enum EArticlesSort {
  VIEWS = 'views',
  TITLE = 'title',
  CREATED_AT = 'createdAt',
}

export type TInit = {
  params: TSearchParams
};

export type TSearchParams = {
  sort: EArticlesSort,
  order: TOrderFilter,
  search: string,
  type: TArticlesTypes
};
