import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import i18n from 'configs/i18next';
import { LOCALES } from 'constants/locales';
import { TProfile } from '../../types';

export const requestGetProfileData = createAsyncThunk<TProfile, void, TThunkConfig<string>>(
  'profile/requestGetProfileData',
  async (_, { extra, dispatch, rejectWithValue }) => {
    const profileTranslate = i18n.getFixedT(null, LOCALES.PROFILE);
    const ERROR_GET_PROFILE = profileTranslate('failedGetProfile');

    try {
      const response = await extra.api.get<TProfile>('/profile');
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
