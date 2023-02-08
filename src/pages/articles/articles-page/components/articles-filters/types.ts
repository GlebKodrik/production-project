import { TArticlesTypes } from 'redux-stores/stores/types/articles';

export type TProps = {
  isLoadingGetArticles: boolean,
  setSearchParams: any
};

export type TTabs = {
  name: TArticlesTypes,
  content: string
};
