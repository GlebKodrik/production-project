import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';
import {
  requestGetArticleDetailRecommend,
} from 'redux-stores/stores/article-detail-recommend/requests/request-get-article-detail-recommend';
import {
  requestGetArticleDetailById,
} from 'redux-stores/stores/article-detail/requests/request-get-article-detail-by-id';
import { requestGetComments } from 'redux-stores/stores/article-detail/requests/request-get-comments';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { DynamicModuleLoader, TReducersList } from 'redux-stores/components/dynamic-module-loader';
import { articleDetailReducer } from 'redux-stores/stores/article-detail';
import { articleDetailRecommendReducer } from 'redux-stores/stores/article-detail-recommend';
import { ArticleDetailContent } from './components/article-detail-content';

const reducer: TReducersList[] = [
  { name: 'articleDetail', reducer: articleDetailReducer },
  { name: 'articleDetailRecommend', reducer: articleDetailRecommendReducer },
];

export const ArticleDetailPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { translation } = useLanguage();
  const params = useParams<{ id: string }>();
  const { id } = params;

  if (!id) {
    return (
      <Typography size="large">
        {translation('article.errorArticleById')}
      </Typography>
    );
  }

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
