import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import { TComment } from '../../types';

export const requestGetComments = createAsyncThunk<TComment[], string, TThunkConfig<string>>(
  'article/requestGetComments',
  async (
    articleId,
    { extra, dispatch, rejectWithValue },
  ) => {
    const ERROR_GET_ARTICLE_COMMENTS = 'Ошибка коментов';
    const NOT_ARTICLE_ID = 'Нет id';
    if (!articleId) {
      return rejectWithValue(NOT_ARTICLE_ID);
    }
    try {
      const response = await extra.api.get<TComment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });
      return response.data;
    } catch (error) {
      dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: ERROR_GET_ARTICLE_COMMENTS,
      }));
      return rejectWithValue(ERROR_GET_ARTICLE_COMMENTS);
    }
  },
);
