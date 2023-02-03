import React from 'react';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';
import { useSelector } from 'react-redux';
import { getArticleDetail, getArticleError, getArticleIsLoading } from 'redux-stores/stores/article-detail/selectors';
import { Avatar } from 'shared-components/avatar';
import { Icon } from 'shared-components/icon';
import cn from 'classnames';
import { LOCALES } from 'constants/locales';
import { AddComments } from 'feature/add-comments';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import {
  requestAddComments,
} from 'redux-stores/stores/article-detail/requests/request-add-comments';
import { getUser } from 'redux-stores/stores/user/selectors/get-user';
import { unwrapResult } from '@reduxjs/toolkit';
import { TOption } from 'feature/add-comments/types';
import { Button } from 'shared-components/button';
import { useNavigate } from 'react-router-dom';
import { ArticleDetailContentSkeleton } from './components/article-detail-content-skeleton';
import styles from './article-detail-content.module.scss';
import { ArticleBlock } from './components/article-block';
import { ArticleDetailComments } from '../article-detail-comments';
import { TProps } from './types';

export const ArticleDetailContent = ({ id }: TProps) => {
  const navigate = useNavigate();
  const article = useSelector(getArticleDetail);
  const isLoading = useSelector(getArticleIsLoading);
  const user = useSelector(getUser);
  const dispatch = useAppDispatch();
  const error = useSelector(getArticleError);
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

  const onGotoBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.wrapper}>
      <Button onClick={onGotoBack} color="secondary" className={styles.back}>
        ← К списку
      </Button>
      <Avatar src={article?.img} className={styles.avatar} alt="article" size={180} />
      <Typography size="large" className={styles.title} tag="h1">{article?.title}</Typography>
      <Typography size="medium-large" className={styles.subtitle}>{article?.subtitle}</Typography>
      <div className={styles.wrapperAdditions}>
        <Icon name="eye" fill="secondary" />
        <Typography>{article?.views}</Typography>
      </div>
      <div className={cn(styles.wrapperAdditions, styles.lastWrapperAdditions)}>
        <Icon name="calendar" fill="secondary" />
        <Typography>{article?.createdAt}</Typography>
      </div>
      {article?.blocks?.map(ArticleBlock)}
      <Typography
        color="secondary"
        tag="h3"
        size="large"
        className={styles.comment}
      >
        {translation('comment')}
      </Typography>
      <AddComments onSubmit={onSubmit} />
      <ArticleDetailComments />
    </div>
  );
};
