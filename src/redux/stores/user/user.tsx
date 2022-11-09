import { createSlice } from '@reduxjs/toolkit';
import { TUserState } from './types';

const initialState: TUserState = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
