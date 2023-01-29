import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticleDetailScheme, TComment } from './types';
import { requestGetArticleDetailById } from './requests/request-get-article-detail-by-id';
import { TArticle } from '../../../pages/articles/types';
import { requestGetComments } from './requests/request-get-comments';
import { requestAddComments } from './requests/request-add-comments';

const initialState: TArticleDetailScheme = {
  isLoading: false,
  data: undefined,
  error: undefined,
  comments: {
    data: undefined,
    isLoading: false,
    error: undefined,
    sendComment: {
      isLoading: false,
    },
  },
};

export const articleDetailSlice = createSlice({
  name: 'articles',
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
      })
      .addCase(requestGetComments.pending, (state) => {
        state.comments.error = undefined;
        state.comments.isLoading = true;
      })
      .addCase(requestGetComments.fulfilled, (state, action: PayloadAction<TComment[]>) => {
        const initialComments = [...action.payload];
        state.comments.isLoading = false;
        state.comments.data = initialComments.reverse();
      })
      .addCase(requestGetComments.rejected, (state, action) => {
        state.comments.isLoading = false;
        state.comments.error = action.payload;
      })
      .addCase(requestAddComments.pending, (state) => {
        state.comments.sendComment.isLoading = true;
      })
      .addCase(requestAddComments.fulfilled, (state) => {
        state.comments.sendComment.isLoading = false;
      })
      .addCase(requestAddComments.rejected, (state) => {
        state.comments.sendComment.isLoading = false;
      });
  },
});

export const { actions: articlesActions } = articleDetailSlice;
export const { reducer: articlesReducer } = articleDetailSlice;
