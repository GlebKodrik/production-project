import { articleDetailActions } from './article-detail-slice';
import { TArticleDetailScheme } from './types';
import {
  requestGetArticleDetailRecommends,
} from './stores/article-detail-recommend/requests/request-get-article-detail-recommend';
import { articleDetailsReducer } from './combine-reducers';

export {
  articleDetailActions,
  TArticleDetailScheme,
  requestGetArticleDetailRecommends,
  articleDetailsReducer,
};
