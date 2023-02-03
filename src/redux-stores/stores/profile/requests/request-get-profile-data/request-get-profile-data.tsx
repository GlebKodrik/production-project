import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import { LOCALES } from 'constants/locales';
import i18n from 'i18next';
import { TProfile } from '../../types';

export const requestGetProfileData = createAsyncThunk<TProfile, string, TThunkConfig<string>>(
  'profile/requestGetProfileData',
  async (profileId, { extra, dispatch, rejectWithValue }) => {
    let ERROR_GET_PROFILE: string;
    try {
      await i18n.loadNamespaces([LOCALES.PROFILE_PAGE]);
      const profileTranslate = i18n.getFixedT(null, LOCALES.PROFILE_PAGE);
      ERROR_GET_PROFILE = profileTranslate('failedGetProfile');
    } catch (error) {
      ERROR_GET_PROFILE = 'Error loading profile';
    }

    try {
      const response = await extra.api.get<TProfile>(`/users/${profileId}`);
      return response.data;
    } catch (error) {
      dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: ERROR_GET_PROFILE,
      }));
      return rejectWithValue(ERROR_GET_PROFILE);
    }
  },
);
