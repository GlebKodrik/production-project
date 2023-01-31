import React from 'react';
import { useSelector } from 'react-redux';
import { getArticles, getVariantView } from 'redux-stores/stores/articles/selectors';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';
import { getArticlesIsLoading } from 'redux-stores/stores/articles/selectors/get-articles';
import { ROUTES_PATH } from 'constants/routers';
import {
  ArticleCard,
  ArticleCardBigSkeleton,
  ArticleCardSmallSkeleton,
} from 'shared-components/article-card';
import styles from './article-list.module.scss';
import { TArticleBlock, TArticleBlockText } from '../../../types';

export const ArticleList = () => {
  const { translation } = useLanguage();
  const articles = useSelector(getArticles);
  const isLoading = useSelector(getArticlesIsLoading);
  const variantViewArticle = useSelector(getVariantView);

  if (isLoading) {
    return variantViewArticle === 'big'
      ? <ArticleCardBigSkeleton />
      : <ArticleCardSmallSkeleton />;
  }

  if (!articles?.length && !isLoading) {
    return <Typography color="secondary" size="medium-large">{translation('articles.notArticles')}</Typography>;
  }

  const getParagraph = (blocks: TArticleBlock[]): string => {
    const textBlock = blocks.find(({ type }) => type === 'TEXT') as TArticleBlockText;
    return textBlock?.paragraphs?.join();
  };

  return (
    <div className={styles.wrapper}>
      {articles?.map((article) => (
        <ArticleCard
          key={article.id}
          color="secondary"
          views={article.views}
          title={article.title}
          types={article.type}
          image={article.img}
          createdAt={article.createdAt}
          user={article.user}
          className={styles[variantViewArticle]}
          variant={variantViewArticle}
          paragraph={getParagraph(article.blocks)}
          to={`${ROUTES_PATH.ARTICLE_DETAIL}/${article.id}`}
        />
      ))}
    </div>
  );
};
