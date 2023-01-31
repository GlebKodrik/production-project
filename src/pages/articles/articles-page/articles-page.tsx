import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { requestGetArticles } from 'redux-stores/stores/articles/requests/request-get-articles';
import { TVariantView } from 'shared-components/article-card';
import { articleActions } from 'redux-stores/stores/articles';
import { getVariantView } from 'redux-stores/stores/articles/selectors';
import { ArticleVariantView } from './components/article-variant-view';
import { ArticleList } from './components/article-list';
import styles from './articles-page.module.scss';

export const ArticlesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const variantView = useSelector(getVariantView);

  useEffect(() => {
    dispatch(requestGetArticles());
  }, []);

  const onChangeView = (name: TVariantView) => {
    dispatch(articleActions.setVariantView(name));
  };

  return (
    <>
      <ArticleVariantView
        variantView={variantView}
        onClick={onChangeView}
        color="secondary"
        className={styles.variantViewWrapper}
      />
      <ArticleList />
    </>
  );
};
