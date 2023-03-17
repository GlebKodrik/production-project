import { TArticlesTypes } from '@/redux-stores/stores/types/articles';

export type TProps = {
  isLoadingGetArticles: boolean,
};

export type TTabs = {
  name: TArticlesTypes,
  content: string
};
