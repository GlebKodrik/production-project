import { createAsyncThunk } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { notificationsActions } from '@/feature/notifications/stores/notifications';
import i18n from '@/configs/i18next';
import { userActions } from '@/redux-stores/stores/user';
import { TThunkConfig } from '@/redux-stores/types/thunk-config';
import { TUser } from '@/redux-stores/stores/profile/types';
import { TPropsThunk } from './types';

export const requestLoginByUser = createAsyncThunk<TUser, TPropsThunk, TThunkConfig<string>>(
  'login/saveProfileData',
  async (loginData, { extra, dispatch, rejectWithValue }) => {
    const ERROR_MESSAGE_LOGIN = i18n.t('auth.failedLogin');

    try {
      const response = await extra.api.post<TUser>('/login', loginData);
      batch(() => {
        dispatch(userActions.setUser(response.data));
        dispatch(notificationsActions.showNotification({
          severity: 'success',
          message: i18n.t('auth.successfulLogin'),
        }));
      });
      return response.data;
    } catch (error) {
      dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: ERROR_MESSAGE_LOGIN,
      }));
      return rejectWithValue(ERROR_MESSAGE_LOGIN);
    }
  },
);
