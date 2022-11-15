import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { TUserScheme } from '../../../../../../../redux/stores/user';
import { TPropsThunk } from './types';
import { notificationsActions } from '../../../../../../notifications/stores/notifications';
import i18n from '../../../../../../../configs/i18next';

export const requestLoginByUser = createAsyncThunk<TUserScheme, TPropsThunk, { rejectValue: string }>(
  'login/requestLoginByUser',
  async (loginData, thunkAPI) => {
    const ERROR_MESSAGE_LOGIN = i18n.t('auth.failedLogin');

    try {
      const response = await axios.post<TUserScheme>('http://localhost:8000/login', loginData);
      thunkAPI.dispatch(notificationsActions.showNotification({
        severity: 'success',
        message: i18n.t('auth.successfulLogin'),
      }));
      return response.data;
    } catch (error) {
      thunkAPI.dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: ERROR_MESSAGE_LOGIN,
      }));
      return thunkAPI.rejectWithValue(ERROR_MESSAGE_LOGIN);
    }
  },
);
