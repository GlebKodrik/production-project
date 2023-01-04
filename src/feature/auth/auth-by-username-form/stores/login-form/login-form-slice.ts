import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TLoginFormState } from './types';
import { requestLoginByUser } from './requests/request-login-by-user';

const initialState: TLoginFormState = {
  username: '',
  password: '',
  error: undefined,
  isLoading: false,
  isAuth: false,
};

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestLoginByUser.pending, (state) => {
        state.error = undefined;
        state.isAuth = false;
        state.isLoading = true;
      })
      .addCase(requestLoginByUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        console.log(action);
      })
      .addCase(requestLoginByUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isAuth = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginFormActions } = loginFormSlice;
export const { reducer: loginFormReducer } = loginFormSlice;
