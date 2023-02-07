import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticleDetailRecommendScheme } from './types';
import { requestGetArticleDetailRecommends } from './requests/request-get-article-detail-recommend';
import { TArticle } from '../../../types/articles';

const initialState: TArticleDetailRecommendScheme = {
  isLoading: false,
  data: [],
  error: undefined,
  isFinish: false,
};

export const articleDetailRecommendsSlice = createSlice({
  name: 'articleDetailRecommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestGetArticleDetailRecommends.pending, (state) => {
        state.data = [];
        state.isLoading = true;
        state.isFinish = false;
      })
      .addCase(requestGetArticleDetailRecommends.fulfilled, (state, action: PayloadAction<TArticle[]>) => {
        state.data = action.payload;
        state.isFinish = true;
        state.isLoading = false;
      })
      .addCase(requestGetArticleDetailRecommends.rejected, (state) => {
        state.isLoading = false;
        state.isFinish = false;
      });
  },
});

export const { actions: articleDetailRecommendActions } = articleDetailRecommendsSlice;
export const { reducer: articleDetailRecommendReducer } = articleDetailRecommendsSlice;
