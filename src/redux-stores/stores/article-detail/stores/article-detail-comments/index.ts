import { articleDetailCommentsActions, articleDetailCommentsReducer } from './article-detail-recommends-slice';
import { TArticleDetailCommentsScheme } from './types';
import { requestAddComments } from './requests/request-add-comments';
import { requestGetComments } from './requests/request-get-comments';

export {
  articleDetailCommentsActions,
  articleDetailCommentsReducer,
  TArticleDetailCommentsScheme,
  requestAddComments,
  requestGetComments,
};
