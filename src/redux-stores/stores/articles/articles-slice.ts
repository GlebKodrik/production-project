import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticleScheme } from './types';
import { requestGetArticleById } from './requests/request-get-article-by-id';
import { TArticle } from '../../../entities/articles/types';

const initialState: TArticleScheme = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestGetArticleById.pending, (state) => {
        state.error = undefined;
        state.data = undefined;
        state.isLoading = true;
      })
      .addCase(requestGetArticleById.fulfilled, (state, action: PayloadAction<TArticle>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(requestGetArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
