import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticleDetailScheme } from './types';
import { requestGetArticleDetailById } from './requests/request-get-article-detail-by-id';
import { TArticle } from '../types/articles';

const initialState: TArticleDetailScheme = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const articleDetailSlice = createSlice({
  name: 'articleDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestGetArticleDetailById.pending, (state) => {
        state.error = undefined;
        state.data = undefined;
        state.isLoading = true;
      })
      .addCase(requestGetArticleDetailById.fulfilled, (state, action: PayloadAction<TArticle>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(requestGetArticleDetailById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailActions } = articleDetailSlice;
export const { reducer: articleDetailReducer } = articleDetailSlice;
