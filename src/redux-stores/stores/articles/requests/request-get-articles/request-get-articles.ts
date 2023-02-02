import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import i18n from 'i18next';
import { TArticle } from 'pages/articles/types';
import { TProps } from './types';
import { getArticlesLimited } from '../../selectors';

export const requestGetArticles = createAsyncThunk<TArticle[], TProps, TThunkConfig<string>>(
  'articles/requestGetArticlesNextPage',
  async (
    { page = 1 },
    {
      extra, dispatch, rejectWithValue, getState,
    },
  ) => {
    const ERROR_GET_ARTICLES = i18n.t('articles.errorGetArticles');
    const limit = getArticlesLimited(getState());

    try {
      const response = await extra.api.get<TArticle[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
        },
      });
      return response.data;
    } catch (error) {
      dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: ERROR_GET_ARTICLES,
      }));
      return rejectWithValue(ERROR_GET_ARTICLES);
    }
  },
);
