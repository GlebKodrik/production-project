import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { requestGetArticles } from '@/redux-stores/stores/articles/requests/request-get-articles';
import { articleActions, EArticlesSort } from '@/redux-stores/stores/articles';
import {
  getArticlesIsLoading,
  getArticlesIsInit,
} from '@/redux-stores/stores/articles/selectors';

import { TOrderFilter } from '@/redux-stores/stores/types/types';

import { TArticlesTypes } from '@/redux-stores/stores/types/articles';
import { ScrollToPosition } from '@/feature/scroll-to-position';
import { ArticlesLists } from './components/articles-lists';
import { ArticlesFilters } from './components/articles-filters';
import { ArticlesInfiniteScroll } from './components/articles-infinite-scroll';

export const ArticlesPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticlesIsLoading);
  const isInit = useSelector(getArticlesIsInit);

  useEffect(() => {
    if (!isInit) {
      dispatch(articleActions.init({
        params: {
          order: searchParams.get('order') as TOrderFilter || 'asc',
          search: searchParams.get('search') || '',
          sort: searchParams.get('sort') as EArticlesSort || EArticlesSort.VIEWS,
          type: searchParams.get('type') as TArticlesTypes || 'all',
        },
      }));
      dispatch(requestGetArticles({ page: 1 }));
    }
  }, []);

  return (
    <ScrollToPosition>
      <ArticlesInfiniteScroll>
        <ArticlesFilters
          isLoadingGetArticles={isLoading}
        />
        <ArticlesLists />
      </ArticlesInfiniteScroll>
    </ScrollToPosition>

  );
};
