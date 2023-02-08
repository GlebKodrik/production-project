import { combineReducers } from '@reduxjs/toolkit';
import { TArticleScheme } from './types';
import { articleDetailReducer } from './article-detail-slice';
import { articleDetailRecommendsReducer } from './stores/article-detail-recommends';
import { articleDetailCommentsReducer } from './stores/article-detail-comments';

export const articleDetailsReducer = combineReducers<TArticleScheme>({
  article: articleDetailReducer,
  recommends: articleDetailRecommendsReducer,
  comments: articleDetailCommentsReducer,
});
