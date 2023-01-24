import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import i18n from 'configs/i18next';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import { TArticle } from 'pages/articles/types';

export const requestGetArticleById = createAsyncThunk<TArticle, string, TThunkConfig<string>>(
  'article/requestGetArticleByI',
  async (
    articleId,
    { extra, dispatch, rejectWithValue },
  ) => {
    const ERROR_GET_ARTICLE = i18n.t('article.errorRequestGetArticleById');
    try {
      const response = await extra.api.get<TArticle>(`/articles/${articleId}`);
      return response.data;
    } catch (error) {
      dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: ERROR_GET_ARTICLE,
      }));
      return rejectWithValue(ERROR_GET_ARTICLE);
    }
  },
);
