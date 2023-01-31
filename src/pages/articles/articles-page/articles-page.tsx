import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/use-app-dispatch';
import { requestGetArticles } from '../../../redux-stores/stores/articles/requests/request-get-articles';
import { ArticleList } from './components/article-list';

export const ArticlesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(requestGetArticles());
  }, []);

  return (
    <>
      <ArticleList />
    </>
  );
};
