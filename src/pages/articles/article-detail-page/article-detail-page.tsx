import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from 'shared-components/typography';
import { useLanguage } from 'hooks/use-language';
import { ArticleDetail } from './components/article-detail';
import { Page } from '../../../shared-components/page';

export const ArticleDetailPage: React.FC = () => {
  const { translation } = useLanguage();
  const params = useParams<{ id: string }>();
  const { id } = params;

  if (!id) {
    return (
      <Typography size="large">
        {translation('article.errorArticleById')}
      </Typography>
    );
  }

  return (
    <Page>
      <ArticleDetail id={id} />
    </Page>
  );
};
