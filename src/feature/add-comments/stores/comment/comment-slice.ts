import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TCommentScheme } from './types';

const initialState: TCommentScheme = {
  comment: '',
};

export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
  },
});

export const { actions: commentActions } = commentSlice;
export const { reducer: commentReducer } = commentSlice;
