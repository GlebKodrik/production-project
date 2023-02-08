import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticleDetailRecommendsScheme } from './types';
import { requestGetArticleDetailRecommends } from './requests/request-get-article-detail-recommends';
import { TArticle } from '../../../types/articles';

const initialState: TArticleDetailRecommendsScheme = {
  isLoading: false,
  data: [],
  error: undefined,
  isFinish: false,
};

export const articleDetailRecommendsSlice = createSlice({
  name: 'articleDetailRecommends',
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

export const { actions: articleDetailRecommendsActions } = articleDetailRecommendsSlice;
export const { reducer: articleDetailRecommendsReducer } = articleDetailRecommendsSlice;
