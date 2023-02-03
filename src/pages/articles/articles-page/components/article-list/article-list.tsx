import React from 'react';
import { useSelector } from 'react-redux';
import { getArticles, getVariantView } from 'redux-stores/stores/articles/selectors';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';
import { getArticlesIsFinished, getArticlesIsLoading } from 'redux-stores/stores/articles/selectors/get-articles';
import { ROUTES_PATH } from 'constants/routers';
import {
  ArticleCard, ArticleCardBigSkeleton, ArticleCardSmallSkeleton, TVariantView,
} from 'shared-components/article-card';
import styles from './article-list.module.scss';
import { TArticleBlock, TArticleBlockText } from '../../../types';

const getSkeletons = (variantView: TVariantView) => {
  const isBigView = variantView === 'big';
  const Component = isBigView ? ArticleCardBigSkeleton : ArticleCardSmallSkeleton;
  const countSkeletonsView = isBigView ? 3 : 9;
  return new Array(countSkeletonsView).fill(0).map((_, index) => (
    <Component key={index} className={styles[variantView]} />
  ));
};

export const ArticleList = () => {
  const { translation } = useLanguage();
  const articles = useSelector(getArticles);
  const isFinished = useSelector(getArticlesIsFinished);
  const isLoading = useSelector(getArticlesIsLoading);
  const variantViewArticle = useSelector(getVariantView);
  const isNotArticles = isFinished && !articles?.length;

  if (isNotArticles) {
    return <Typography size="medium-large">{translation('articles.notArticles')}</Typography>;
  }

  const renderIsLoading = () => {
    if (isLoading) {
      return getSkeletons(variantViewArticle);
    }
    return null;
  };

  const getParagraph = (blocks: TArticleBlock[]): string => {
    const textBlock = blocks.find(({ type }) => type === 'TEXT') as TArticleBlockText;
    return textBlock?.paragraphs?.join();
  };

  return (
    <div className={styles.wrapper}>
      {articles?.map((article, index) => (
        <ArticleCard
          key={index}
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
      {renderIsLoading()}
    </div>
  );
};
