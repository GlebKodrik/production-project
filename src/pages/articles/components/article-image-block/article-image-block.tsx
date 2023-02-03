import React from 'react';
import { Typography } from 'shared-components/typography';
import cn from 'classnames';
import { TArticleImageBlockProps } from './types';
import styles from './article-image-block.module.scss';

export const ArticleImageBlock = React.memo(({
  className,
  src,
  title,
}: TArticleImageBlockProps) => {
  if (!src && !title) {
    return null;
  }

  return (
    <section className={cn(styles.wrapper, className)}>
      <img src={src} alt="article" className={styles.image} />
      {title && <Typography>{title}</Typography>}
    </section>
  );
});
