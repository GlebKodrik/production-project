import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import i18n from 'i18next';
import { LOCALES } from 'constants/locales';
import { TArticle } from 'pages/articles/types';

export const requestGetArticles = createAsyncThunk<TArticle[], void, TThunkConfig<string>>(
  'articles/requestGetArticles',
  async (
    _,
    { extra, dispatch, rejectWithValue },
  ) => {
    let ERROR_GET_ARTICLE_COMMENTS: string;

    try {
      await i18n.loadNamespaces([LOCALES.ARTICLE_DETAIL_PAGE]);
      const profileTranslate = i18n.getFixedT(null, LOCALES.ARTICLE_DETAIL_PAGE);
      ERROR_GET_ARTICLE_COMMENTS = profileTranslate('errorGetComments');
    } catch (error) {
      ERROR_GET_ARTICLE_COMMENTS = 'Error get comments';
    }

    try {
      const response = await extra.api.get<TArticle[]>('/articles', {
        params: {
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
