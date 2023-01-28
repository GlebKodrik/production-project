import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';
import { ArticleDetail } from './components/article-detail';

export const ArticleDetailPage: React.FC = () => {
  const { translation } = useLanguage();
  const params = useParams<{ id: string }>();
  const { id } = params;

  if (!id) {
    return <Typography color="secondary" size="large">{translation('article.errorArticleById')}</Typography>;
  }

  return (
    <>
      <ArticleDetail id={id} />
    </>
  );
};
