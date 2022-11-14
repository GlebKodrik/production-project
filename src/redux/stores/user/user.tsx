import { createSlice } from '@reduxjs/toolkit';
import { TUserScheme } from './types';

const initialState: TUserScheme = {
  isAuth: false,
  error: null,
  isLoading: false,
  username: null,
  password: null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
