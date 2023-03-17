import React from 'react';
import { useSelector } from 'react-redux';
import { InfiniteScroll } from '@/feature/infinite-scroll';
import { requestGetArticles } from '@/redux-stores/stores/articles/requests/request-get-articles';
import { articleActions } from '@/redux-stores/stores/articles';
import {
  getArticlesIsHasMore,
  getArticlesIsLoading, getArticlesPage,
} from '@/redux-stores/stores/articles/selectors';
import { useAppDispatch } from '@/hooks/use-app-dispatch';
import { TProps } from './types';

export const ArticlesInfiniteScroll = ({ children }: TProps) => {
  const dispatch = useAppDispatch();
  const page = useSelector(getArticlesPage);
  const isHasMore = useSelector(getArticlesIsHasMore);
  const isLoading = useSelector(getArticlesIsLoading);
  const onScrollEnd = () => {
    if (isHasMore && !isLoading) {
      dispatch(requestGetArticles({ page: page + 1 }));
      dispatch(articleActions.setPage(page + 1));
    }
  };
  return (
    <InfiniteScroll
      callbackScrollEnd={onScrollEnd}
    >
      {children}
    </InfiniteScroll>
  );
};
