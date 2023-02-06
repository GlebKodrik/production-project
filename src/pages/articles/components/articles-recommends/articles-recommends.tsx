import React from 'react';
import { useSelector } from 'react-redux';
import { getArticleDetailRecommend } from 'redux-stores/stores/article-detail-recommend/selectors';
import { ArticleCard } from 'shared-components/article-card';
import { ROUTES_PATH } from 'constants/routers';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';
import { LOCALES } from 'constants/locales';
import styles from './articles-recommends.module.scss';

export const ArticlesRecommends = () => {
  const articlesRecommends = useSelector(getArticleDetailRecommend);
  const { translation } = useLanguage(LOCALES.ARTICLE_DETAIL_PAGE);
  return (
    <>
      <Typography size="large" className={styles.recommendText}>{translation('recommend')}</Typography>
      <div className={styles.wrapper}>
        {articlesRecommends?.map((article, index) => (
          <ArticleCard
            key={index}
            color="secondary"
            views={article.views}
            title={article.title}
            types={article.type}
            image={article.img}
            createdAt={article.createdAt}
            variant="small"
            to={`${ROUTES_PATH.ARTICLE_DETAIL}/${article.id}`}
          />
        ))}
      </div>
    </>
  );
};
