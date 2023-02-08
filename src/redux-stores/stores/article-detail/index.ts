import { articleDetailActions } from './article-detail-slice';
import { TArticleScheme } from './types';
import {
  requestGetArticleDetailRecommends,
} from './stores/article-detail-recommends';
import { articleDetailsReducer } from './combine-reducers';
import { requestGetArticleDetailById } from './requests/request-get-article-detail-by-id';
import { requestAddComments, requestGetComments } from './stores/article-detail-comments';
import {
  getArticleDetail, getArticleError, getArticleIsLoading, getIsLoadingSendComment,
} from './selectors';
import { getComments, getCommentsIsFinish, getCommentsIsLoading } from './stores/article-detail-comments/selectors';
import {
  getArticleDetailRecommend, getArticleDetailRecommendIsFinish,
  getArticleDetailRecommendIsLoading,
} from './stores/article-detail-recommends/selectors';

export {
  articleDetailActions,
  TArticleScheme,
  requestGetArticleDetailRecommends,
  articleDetailsReducer,
  requestGetArticleDetailById,
  requestAddComments,
  requestGetComments,
  getArticleDetail,
  getArticleIsLoading,
  getArticleError,
  getIsLoadingSendComment,
  getComments,
  getCommentsIsLoading,
  getCommentsIsFinish,
  getArticleDetailRecommend,
  getArticleDetailRecommendIsLoading,
  getArticleDetailRecommendIsFinish,
};
