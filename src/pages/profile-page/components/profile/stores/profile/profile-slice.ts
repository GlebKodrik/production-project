import { createSlice } from '@reduxjs/toolkit';
import { TProfileSchema } from 'pages/profile-page/components/profile/stores/profile/types';
import { requestGetProfileData } from './requests/request-get-profile-data';

const initialState: TProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestGetProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(requestGetProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(requestGetProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
