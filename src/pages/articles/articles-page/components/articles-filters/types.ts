import { TArticlesTypes } from 'redux-stores/stores/types/articles';
import { EArticlesSort } from 'redux-stores/stores/articles';
import { TOrderFilter } from 'redux-stores/stores/types/types';

export type TProps = {
  isLoadingGetArticles: boolean,
  setSearchParams: (value: { search: string; sort: EArticlesSort; type: TArticlesTypes; order: TOrderFilter }) => void
};

export type TTabs = {
  name: TArticlesTypes,
  content: string
};
