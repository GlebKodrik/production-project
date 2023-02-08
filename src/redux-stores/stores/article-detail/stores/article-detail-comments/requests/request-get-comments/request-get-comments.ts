import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import i18n from 'i18next';
import { LOCALES } from 'constants/locales';
import { TComment } from '../../../../types';

export const requestGetComments = createAsyncThunk<TComment[], string, TThunkConfig<string>>(
  'article/requestAddComments',
  async (
    articleId,
    { extra, dispatch, rejectWithValue },
  ) => {
    let ERROR_GET_ARTICLE_COMMENTS: string;
    let NOT_ARTICLE_ID: string;

    try {
      await i18n.loadNamespaces([LOCALES.ARTICLE_DETAIL_PAGE]);
      const profileTranslate = i18n.getFixedT(null, LOCALES.ARTICLE_DETAIL_PAGE);
      ERROR_GET_ARTICLE_COMMENTS = profileTranslate('errorGetComments');
      NOT_ARTICLE_ID = profileTranslate('errorGetComments');
    } catch (error) {
      ERROR_GET_ARTICLE_COMMENTS = 'Error get comments';
      NOT_ARTICLE_ID = 'Not id';
    }

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
