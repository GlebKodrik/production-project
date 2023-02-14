import { TArticlesTypes } from 'redux-stores/stores/types/articles';

export type TProps = {
  isLoadingGetArticles: boolean,
  setSearchParams: (value: any) => void
};

export type TTabs = {
  name: TArticlesTypes,
  content: string
};
