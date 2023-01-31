import React from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from 'redux-stores/stores/articles/selectors';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';
import { getArticlesIsLoading } from 'redux-stores/stores/articles/selectors/get-articles';
import { ROUTES_PATH } from 'constants/routers';
import { ArticleCard, ArticleCardBigSkeleton } from '../../../../../shared-components/card';
import styles from './article-list.module.scss';
import { TArticleBlock, TArticleBlockText } from '../../../types';

export const ArticleList = () => {
  const { translation } = useLanguage();
  const articles = useSelector(getArticles);
  const isLoading = useSelector(getArticlesIsLoading);

  if (isLoading) {
    return <ArticleCardBigSkeleton />;
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
          className={styles.big}
          variant="big"
          paragraph={getParagraph(article.blocks)}
          to={`${ROUTES_PATH.ARTICLE_DETAIL}/${article.id}`}
        />
      ))}
    </div>
  );
};
