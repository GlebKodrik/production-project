import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { TUserScheme } from '../../../../../../../redux/stores/user';
import { TPropsThunk } from './types';

const ERROR_MESSAGE_LOGIN = 'Ошибка авторизации';

export const requestLoginByUser = createAsyncThunk<TUserScheme, TPropsThunk, { rejectValue: string }>(
  'login/requestLoginByUser',
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post<TUserScheme>('http://localhost:8000/login', loginData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(ERROR_MESSAGE_LOGIN);
    }
  },
);
