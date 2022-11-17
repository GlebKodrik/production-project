import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, TUserScheme } from './types';

const initialState: TUserScheme = {
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.userData = action.payload;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
