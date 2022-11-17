import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TPropsThunk } from './types';
import { notificationsActions } from '../../../../../../notifications/stores/notifications';
import i18n from '../../../../../../../configs/i18next';
import { userActions } from '../../../../../../../redux/stores/user';
import type { TUser } from '../../../../../../../redux/stores/user/types';
import { ControlLocalStorage } from '../../../../../../../utils/control-local-storage';
import { LOCAL_STORAGE_KEYS } from '../../../../../../../constants/local-storage-keys';

export const requestLoginByUser = createAsyncThunk<TUser, TPropsThunk, { rejectValue: string }>(
  'login/requestLoginByUser',
  async (loginData, thunkAPI) => {
    const ERROR_MESSAGE_LOGIN = i18n.t('auth.failedLogin');

    try {
      const response = await axios.post<TUser>('http://localhost:8000/login', loginData);
      ControlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.AUTH, response.data);
      thunkAPI.dispatch(userActions.setUser(response.data));
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
