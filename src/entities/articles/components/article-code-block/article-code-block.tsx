import React from 'react';
import { Code } from 'shared-components/code';
import { TArticleCodeBlockProps } from './types';

export const ArticleCodeBlock = React.memo(({
  className,
  code,
}: TArticleCodeBlockProps) => (
  <section className={className}>
    <Code color="secondary">{code}</Code>
  </section>
));
