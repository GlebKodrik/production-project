import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import i18n from 'configs/i18next';
import { userActions } from 'redux-stores/stores/user';
import type { TUser } from 'redux-stores/stores/user/types';
import { ControlLocalStorage } from 'services/control-local-storage';
import { LOCAL_STORAGE_KEYS } from 'constants/local-storage-keys';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import { batch } from 'react-redux';
import { TPropsThunk } from './types';

export const requestLoginByUser = createAsyncThunk<TUser, TPropsThunk, TThunkConfig<string>>(
  'login/saveProfileData',
  async (loginData, { extra, dispatch, rejectWithValue }) => {
    const ERROR_MESSAGE_LOGIN = i18n.t('auth.failedLogin');

    try {
      const response = await extra.api.post<TUser>('/login', loginData);
      ControlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.AUTH, response.data);
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
