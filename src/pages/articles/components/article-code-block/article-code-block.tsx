import React from 'react';
import { Code } from 'shared-components/code';
import { useLanguage } from 'hooks/use-language';
import { TArticleCodeBlockProps } from './types';
import { LOCALES } from '../../../../constants/locales';

export const ArticleCodeBlock = React.memo(({
  className,
  code,
}: TArticleCodeBlockProps) => {
  const { translation } = useLanguage(LOCALES.ARTICLE_PAGE);
  return (
    <section className={className}>
      <Code
        color="secondary"
        isCopy
        errorMessage={translation('errorMessage')}
        successMessage={translation('successMessage')}
      >
        {code}
      </Code>
    </section>
  );
});
