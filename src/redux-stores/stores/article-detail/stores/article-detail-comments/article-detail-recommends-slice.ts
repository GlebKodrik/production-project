import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TArticleDetailCommentsScheme } from './types';
import { TComment } from '../../types';
import { requestGetComments } from './requests/request-get-comments';
import { requestAddComments } from './requests/request-add-comments';

const initialState: TArticleDetailCommentsScheme = {
  isLoading: false,
  data: [],
  error: undefined,
  isFinish: false,
  sendComment: {
    isLoading: false,
  },
};

export const articleDetailRecommendsSlice = createSlice({
  name: 'articleDetailComments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestGetComments.pending, (state) => {
        state.error = undefined;
        state.isFinish = false;
        state.isLoading = true;
      })
      .addCase(requestGetComments.fulfilled, (state, action: PayloadAction<TComment[]>) => {
        const initialComments = [...action.payload];
        state.isLoading = false;
        state.isFinish = true;
        state.data = initialComments.reverse();
      })
      .addCase(requestGetComments.rejected, (state, action) => {
        state.isLoading = false;
        state.isFinish = false;
        state.error = action.payload;
      })
      .addCase(requestAddComments.pending, (state) => {
        state.sendComment.isLoading = true;
      })
      .addCase(requestAddComments.fulfilled, (state) => {
        state.sendComment.isLoading = false;
      })
      .addCase(requestAddComments.rejected, (state) => {
        state.sendComment.isLoading = false;
      });
  },
});

export const { actions: articleDetailCommentsActions } = articleDetailRecommendsSlice;
export const { reducer: articleDetailCommentsReducer } = articleDetailRecommendsSlice;
