import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { DynamicModuleLoader, TReducersList } from 'redux-stores/components/dynamic-module-loader';
import { requestGetComments } from 'redux-stores/stores/article-detail/requests/request-get-comments';
import { requestGetArticleDetailById }
  from 'redux-stores/stores/article-detail/requests/request-get-article-detail-by-id';
import { articleDetailReducer } from 'redux-stores/stores/article-detail';
import { articleDetailRecommendReducer } from 'redux-stores/stores/article-detail-recommend';
import {
  requestGetArticleDetailRecommend,
} from 'redux-stores/stores/article-detail-recommend/requests/request-get-article-detail-recommend';
import { TArticleDetailProps } from './types';
import { ArticleDetailContent } from './components/article-detail-content';

const reducer: TReducersList[] = [
  { name: 'articleDetail', reducer: articleDetailReducer },
  { name: 'articleDetailRecommend', reducer: articleDetailRecommendReducer },
];

export const ArticleDetail: React.FC<TArticleDetailProps> = ({
  id,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestGetArticleDetailRecommend());
    dispatch(requestGetArticleDetailById(id));
    dispatch(requestGetComments(id));
  }, [id]);

  return (
    <DynamicModuleLoader reducers={reducer}>
      <ArticleDetailContent id={id} />
    </DynamicModuleLoader>
  );
};
