import { articleDetailActions, articleDetailReducer } from './article-detail-slice';
import { TArticleDetailScheme } from './types';
import {
  requestGetArticleDetailRecommends,
} from './stores/article-detail-recommend/requests/request-get-article-detail-recommend';

export {
  articleDetailActions,
  articleDetailReducer,
  TArticleDetailScheme,
  requestGetArticleDetailRecommends,
};
