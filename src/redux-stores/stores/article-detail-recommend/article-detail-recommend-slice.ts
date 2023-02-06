import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticleDetailRecommendScheme } from './types';
import { requestGetArticleDetailRecommend } from './requests/request-get-article-detail-recommend';
import { TArticle } from '../types/articles';

const initialState: TArticleDetailRecommendScheme = {
  isLoading: false,
  data: [],
  error: undefined,
  isFinish: false,
};

export const articleDetailRecommendSlice = createSlice({
  name: 'articleDetailRecommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestGetArticleDetailRecommend.pending, (state) => {
        state.data = [];
        state.isLoading = true;
        state.isFinish = false;
      })
      .addCase(requestGetArticleDetailRecommend.fulfilled, (state, action: PayloadAction<TArticle[]>) => {
        state.data = action.payload;
        state.isFinish = true;
        state.isLoading = false;
      })
      .addCase(requestGetArticleDetailRecommend.rejected, (state) => {
        state.isLoading = false;
        state.isFinish = false;
      });
  },
});

export const { actions: articleDetailRecommendActions } = articleDetailRecommendSlice;
export const { reducer: articleDetailRecommendReducer } = articleDetailRecommendSlice;
