import React from 'react';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';
import { useSelector } from 'react-redux';
import { getArticle, getArticleError, getArticleIsLoading } from 'redux-stores/stores/articles/selectors';
import { Avatar } from 'shared-components/avatar';
import { Icon } from 'shared-components/icon';
import { EArticleBlockType, TArticleBlock } from 'pages/articles/types';
import { ArticleImageBlock } from 'pages/articles/components/article-image-block';
import { ArticleCodeBlock } from 'pages/articles/components/article-code-block';
import cn from 'classnames';
import { ArticleTextBlock } from '../../../../../components/article-text-block';
import { ArticleDetailContentSkeleton } from './components/article-detail-content-skeleton';
import styles from './article-detail-content.module.scss';

export const ArticleDetailContent: React.FC = () => {
  const article = useSelector(getArticle);
  const isLoading = useSelector(getArticleIsLoading);
  const error = useSelector(getArticleError);
  const { translation } = useLanguage();

  if (isLoading) {
    return <ArticleDetailContentSkeleton />;
  }

  if (error) {
    return <Typography color="secondary" size="medium-large">{translation('article.errorArticleById')}</Typography>;
  }

  const renderBlock = (block: TArticleBlock) => {
    if (!block.type) {
      return null;
    }
    switch (block.type) {
      case EArticleBlockType.TEXT:
        return (
          <ArticleTextBlock
            key={block.id}
            title={block.title}
            paragraphs={block.paragraphs}
            className={styles.block}
          />
        );
      case EArticleBlockType.IMAGE:
        return (
          <ArticleImageBlock
            key={block.id}
            className={styles.block}
            src={block.src}
            title={block.title}
          />
        );
      case EArticleBlockType.CODE:
        return (
          <ArticleCodeBlock
            key={block.id}
            className={styles.block}
            code={block.code}
          />
        );
      default:
        return null;
    }
  };

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
      {article?.blocks?.map(renderBlock)}
    </>
  );
};
