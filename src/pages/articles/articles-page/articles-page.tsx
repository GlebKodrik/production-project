import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { requestGetArticles } from 'redux-stores/stores/articles/requests/request-get-articles';
import { TVariantView } from 'shared-components/article-card';
import { articleActions } from 'redux-stores/stores/articles';
import { getArticlesPage, getVariantView } from 'redux-stores/stores/articles/selectors';
import { InfiniteScroll } from 'shared-components/infinite-scroll';
import { getArticlesIsHasMore, getArticlesIsLoading } from 'redux-stores/stores/articles/selectors/get-articles';
import { Page } from 'shared-components/page';
import { ArticleVariantView } from './components/article-variant-view';
import { ArticleList } from './components/article-list';
import styles from './articles-page.module.scss';

export const ArticlesPage: React.FC = () => {
  const page = useSelector(getArticlesPage);
  const isHasMore = useSelector(getArticlesIsHasMore);
  const isLoading = useSelector(getArticlesIsLoading);
  const dispatch = useAppDispatch();
  const variantView = useSelector(getVariantView);

  const onScrollEnd = () => {
    if (isHasMore && !isLoading) {
      dispatch(requestGetArticles({ page: page + 1 }));
      dispatch(articleActions.setPage(page + 1));
    }
  };

  useEffect(() => {
    dispatch(requestGetArticles({ page: 1 }));
  }, [variantView]);

  const onChangeView = (name: TVariantView) => {
    dispatch(articleActions.setVariantView(name));
  };

  return (
    <Page id="scrollableDiv">
      <InfiniteScroll callbackScrollEnd={onScrollEnd} scrollableTarget="scrollableDiv">
        <ArticleVariantView
          variantView={variantView}
          onClick={onChangeView}
          color="secondary"
          className={styles.variantViewWrapper}
        />
        <ArticleList />
      </InfiniteScroll>
    </Page>
  );
};
