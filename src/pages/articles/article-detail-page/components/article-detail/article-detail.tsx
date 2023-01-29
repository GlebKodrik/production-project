import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { DynamicModuleLoader, TReducersList } from 'redux-stores/components/dynamic-module-loader';
import { requestGetComments } from 'redux-stores/stores/article-detail/requests/request-get-comments';
import { requestGetArticleDetailById }
  from 'redux-stores/stores/article-detail/requests/request-get-article-detail-by-id';
import { articlesReducer } from 'redux-stores/stores/article-detail';
import { TArticleDetailProps } from './types';
import { ArticleDetailContent } from './components/article-detail-content';

const reducer: TReducersList[] = [
  { name: 'article', reducer: articlesReducer },
];

export const ArticleDetail: React.FC<TArticleDetailProps> = ({
  id,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(requestGetArticleDetailById(id));
    dispatch(requestGetComments(id));
  }, []);

  return (
    <DynamicModuleLoader reducers={reducer}>
      <ArticleDetailContent id={id} />
    </DynamicModuleLoader>
  );
};
