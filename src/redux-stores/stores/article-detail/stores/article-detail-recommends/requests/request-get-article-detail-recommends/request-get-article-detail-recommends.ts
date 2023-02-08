import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import i18n from 'configs/i18next';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import { TArticle } from '../../../../../types/articles';

export const requestGetArticleDetailRecommends = createAsyncThunk<TArticle[], void, TThunkConfig<string>>(
  'article/articleDetailRecommends',
  async (
    _,
    { extra, dispatch, rejectWithValue },
  ) => {
    const ERROR_GET_ARTICLE = i18n.t('article.errorGetRecommend');
    try {
      const response = await extra.api.get<TArticle[]>('/articles', {
        params: {
          _limit: 4,
        },
      });
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
