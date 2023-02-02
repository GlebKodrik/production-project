import { createAsyncThunk } from '@reduxjs/toolkit';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import { getArticlesPage, getArticlesIsHasMore, getArticlesIsLoading } from '../../selectors';
import { articleActions } from '../../articles-slice';
import { requestGetArticles } from '../request-get-articles';

export const requestGetArticlesNextPage = createAsyncThunk<void, void, TThunkConfig<string>>(
  'articles/requestGetArticlesNextPage',
  async (
    _,
    {
      dispatch, getState,
    },
  ) => {
    const page = getArticlesPage(getState());
    const isHasMore = getArticlesIsHasMore(getState());
    const isLoading = getArticlesIsLoading(getState());

    if (isHasMore && !isLoading) {
      dispatch(requestGetArticles({ page: page + 1 }));
      dispatch(articleActions.setPage(page + 1));
    }
  },
);
