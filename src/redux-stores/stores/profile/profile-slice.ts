import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TProfile, TProfileSchema } from 'redux-stores/stores/profile/types';
import { requestGetProfileData } from './requests/request-get-profile-data';
import { saveProfileData } from './requests/save-profile-data';

const initialState: TProfileSchema = {
  isReadOnly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  editForm: undefined,
  saveProfile: {
    isLoading: false,
  },
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    cancelEdit: (state) => {
      state.editForm = state.data;
    },
    changeIsReadOnly: (state, action: PayloadAction<boolean>) => {
      state.isReadOnly = action.payload;
    },
    updateProfileData: (state, action: PayloadAction<TProfile>) => {
      state.editForm = {
        ...state.editForm,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestGetProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(requestGetProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.editForm = action.payload;
      })
      .addCase(requestGetProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(saveProfileData.pending, (state) => {
        state.error = undefined;
        state.saveProfile.isLoading = true;
      })
      .addCase(saveProfileData.fulfilled, (state, action) => {
        state.saveProfile.isLoading = false;
        state.isReadOnly = true;
        state.data = action.payload;
        state.editForm = action.payload;
      })
      .addCase(saveProfileData.rejected, (state, action) => {
        state.isReadOnly = false;
        state.saveProfile.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
