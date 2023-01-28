import React from 'react';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';
import { useSelector } from 'react-redux';
import { getArticleDetail, getArticleError, getArticleIsLoading } from 'redux-stores/stores/article-detail/selectors';
import { Avatar } from 'shared-components/avatar';
import { Icon } from 'shared-components/icon';
import cn from 'classnames';
import { LOCALES } from 'constants/locales';
import { ArticleDetailContentSkeleton } from './components/article-detail-content-skeleton';
import styles from './article-detail-content.module.scss';
import { ArticleBlock } from './components/article-block';

export const ArticleDetailContent: React.FC = () => {
  const article = useSelector(getArticleDetail);
  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);
  const { translation } = useLanguage([LOCALES.ARTICLE_PAGE, LOCALES.BASE]);

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

  return (
    <>
      <Avatar src={article?.img || ''} className={styles.avatar} />
      <Typography color="secondary" size="large" className={styles.title} tag="h1">{article?.title}</Typography>
      <Typography color="secondary" size="medium-large" className={styles.subtitle}>{article?.subtitle}</Typography>
      <div className={styles.wrapperAdditions}>
        <Icon name="eye" fill="secondary" />
        <Typography color="secondary">{article?.views}</Typography>
      </div>
      <div className={cn(styles.wrapperAdditions, styles.lastWrapperAdditions)}>
        <Icon name="calendar" fill="secondary" />
        <Typography color="secondary">{article?.createdAt}</Typography>
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
    </>
  );
};
