import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { requestGetArticleById } from 'redux-stores/stores/articles/requests/request-get-article-by-id';
import { DynamicModuleLoader, TReducersList } from 'redux-stores/components/dynamic-module-loader';
import { articlesReducer } from 'redux-stores/stores/articles';
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
    dispatch(requestGetArticleById(id));
  }, []);

  return (
    <DynamicModuleLoader reducers={reducer}>
      <ArticleDetailContent />
    </DynamicModuleLoader>
  );
};
