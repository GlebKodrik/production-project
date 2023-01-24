import React from 'react';
import { Typography } from 'shared-components/typography';
import styles from './article-text-block.module.scss';
import { TArticleTextBlockProps } from './types';

export const ArticleTextBlock = React.memo((
  {
    title,
    paragraphs,
    className,
  }: TArticleTextBlockProps,
) => {
  const renderParagraphs = (paragraph: string, index: number) => (
    <Typography
      key={index}
      color="secondary"
    >
      {paragraph}
    </Typography>
  );

  return (
    <section className={className}>
      <Typography
        color="secondary"
        tag="h2"
        size="medium-large"
        className={styles.title}
      >
        {title}
      </Typography>
      {paragraphs.map((renderParagraphs))}
    </section>
  );
});
