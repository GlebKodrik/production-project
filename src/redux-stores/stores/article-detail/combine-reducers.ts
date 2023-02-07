import { combineReducers } from '@reduxjs/toolkit';
import { TArticleScheme } from './types';
import { articleDetailReducer } from './article-detail-slice';
import { articleDetailRecommendReducer } from './stores/article-detail-recommend';

export const articleDetailsReducer = combineReducers<TArticleScheme>({
  article: articleDetailReducer,
  recommends: articleDetailRecommendReducer,
});
