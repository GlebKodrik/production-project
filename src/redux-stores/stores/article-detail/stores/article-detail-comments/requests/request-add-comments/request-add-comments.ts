import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import i18n from 'i18next';
import { LOCALES } from 'constants/locales';

import { TProps } from './types';
import { requestGetComments } from '../request-get-comments';
import { TComment } from '../../../../types';

export const requestAddComments = createAsyncThunk<TComment[], TProps, TThunkConfig<string>>(
  'article/addComment',
  async ({ text, userId, articleId }, {
    extra,
    dispatch,
    rejectWithValue,
  }) => {
    let ERROR_SEND_COMMENT: string;
    try {
      await i18n.loadNamespaces([LOCALES.ARTICLE_DETAIL_PAGE]);
      const profileTranslate = i18n.getFixedT(null, LOCALES.ARTICLE_DETAIL_PAGE);
      ERROR_SEND_COMMENT = profileTranslate('errorSendComment');
    } catch (error) {
      ERROR_SEND_COMMENT = 'Error send comment';
    }

    if (!userId || !articleId) {
      dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: ERROR_SEND_COMMENT,
      }));
      return rejectWithValue(ERROR_SEND_COMMENT);
    }

    try {
      const response = await extra.api.post<TComment[]>('/comments', {
        userId,
        articleId,
        text,
      });
      dispatch(requestGetComments(articleId));
      return response.data;
    } catch (error) {
      dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: ERROR_SEND_COMMENT,
      }));
      return rejectWithValue(ERROR_SEND_COMMENT);
    }
  },
);
