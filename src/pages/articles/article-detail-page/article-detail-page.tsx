import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';

import {
  requestGetArticleDetailById,
} from 'redux-stores/stores/article-detail/requests/request-get-article-detail-by-id';

import { useAppDispatch } from 'hooks/use-app-dispatch';
import { DynamicModuleLoader, TReducersList } from 'redux-stores/components/dynamic-module-loader';
import {
  articleDetailsReducer,
  requestGetArticleDetailRecommends,
} from 'redux-stores/stores/article-detail';

import { ArticleDetailContent } from './components/article-detail-content';
import {
  requestGetComments,
} from '../../../redux-stores/stores/article-detail/stores/article-detail-comments';

const reducer: TReducersList[] = [
  { name: 'articleDetail', reducer: articleDetailsReducer },
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
    dispatch(requestGetArticleDetailRecommends());
    dispatch(requestGetArticleDetailById(id));
    dispatch(requestGetComments(id));
  }, [id]);

  return (
    <DynamicModuleLoader reducers={reducer}>
      <ArticleDetailContent id={id} />
    </DynamicModuleLoader>
  );
};
