import { createSlice } from '@reduxjs/toolkit';
import { TProfileSchema } from 'pages/profile-page/components/profile/stores/profile/types';

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
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
