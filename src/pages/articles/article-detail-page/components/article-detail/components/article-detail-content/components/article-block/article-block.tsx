import React from 'react';
import { ArticleTextBlock } from '../../../../../../../components/article-text-block';
import styles from '../../article-detail-content.module.scss';
import { ArticleImageBlock } from '../../../../../../../components/article-image-block';
import { ArticleCodeBlock } from '../../../../../../../components/article-code-block';
import { EArticleBlockType, TArticleBlock } from '../../../../../../../../../redux-stores/stores/types/articles';

export const ArticleBlock = (block: TArticleBlock) => {
  if (!block?.type) {
    return null;
  }
  switch (block?.type) {
    case EArticleBlockType.TEXT:
      return (
        <ArticleTextBlock
          key={block?.id}
          title={block?.title}
          paragraphs={block?.paragraphs}
          className={styles.block}
        />
      );
    case EArticleBlockType.IMAGE:
      return (
        <ArticleImageBlock
          key={block?.id}
          className={styles.block}
          src={block?.src}
          title={block?.title}
        />
      );
    case EArticleBlockType.CODE:
      return (
        <ArticleCodeBlock
          key={block?.id}
          className={styles.block}
          code={block?.code}
        />
      );
    default:
      return null;
  }
};
