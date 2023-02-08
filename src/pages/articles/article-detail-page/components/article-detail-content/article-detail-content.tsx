import React from 'react';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';
import { useSelector } from 'react-redux';
import {
  getArticleError,
  getArticleIsLoading,
  getIsLoadingSendComment,
} from 'redux-stores/stores/article-detail/selectors';
import { LOCALES } from 'constants/locales';
import { AddComments } from 'feature/add-comments';
import { useAppDispatch } from 'hooks/use-app-dispatch';

import { getUser } from 'redux-stores/stores/user/selectors/get-user';
import { unwrapResult } from '@reduxjs/toolkit';
import { TOption } from 'feature/add-comments/types';
import {
  requestAddComments,
} from 'redux-stores/stores/article-detail/stores/article-detail-comments/requests/request-add-comments';
import { ArticleDetailContentSkeleton } from './components/article-detail-content-skeleton';
import styles from './article-detail-content.module.scss';
import { ArticleDetailComments } from '../article-detail-comments';
import { TProps } from './types';
import { Article } from './components/article';
import { ArticlesRecommends } from '../../../components/articles-recommends';

export const ArticleDetailContent = ({ id }: TProps) => {
  const isLoading = useSelector(getArticleIsLoading);
  const user = useSelector(getUser);
  const dispatch = useAppDispatch();
  const error = useSelector(getArticleError);
  const isLoadingSendComment = useSelector(getIsLoadingSendComment);
  const { translation } = useLanguage([LOCALES.ARTICLE_DETAIL_PAGE, LOCALES.BASE]);

  if (isLoading) {
    return <ArticleDetailContentSkeleton />;
  }

  if (error) {
    return (
      <Typography
        color="secondary"
        size="medium-large"
      >
        {translation('article.errorArticleById', { ns: LOCALES.BASE })}
      </Typography>
    );
  }

  const onSubmit = async (value: string, { reset }: TOption) => {
    dispatch(requestAddComments({ text: value, userId: user?.id, articleId: id }))
      .then(unwrapResult)
      .then(() => {
        reset();
      });
  };

  return (
    <div className={styles.wrapper}>
      <Article />
      <ArticlesRecommends />
      <Typography
        color="secondary"
        tag="h3"
        size="large"
        className={styles.comment}
      >
        {translation('comment')}
      </Typography>
      <AddComments onSubmit={onSubmit} isLoading={isLoadingSendComment} />
      <ArticleDetailComments />
    </div>
  );
};
