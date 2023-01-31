import React from 'react';
import { TProps } from './types';
import { ArticleCardSmall } from './components/article-card-small';
import styles from './article-card.module.scss';
import { Icon } from '../icon';
import { Typography } from '../typography';
import { ArticleCardBig } from './components/article-card-big';

export const ArticleCard = ({
  variant = 'big',
  ...props
}: TProps) => {
  if (!props.title || !props.types.length) {
    return null;
  }

  const renderViews = () => props.views && (
    <div className={styles.views}>
      <Icon
        name="eye"
        fill={props.color}
        width={20}
        height={20}
        className={styles.viewsIcon}
      />
      <Typography color={props.color}>
        {props.views}
      </Typography>
    </div>
  );

  return (
    variant !== 'big' ? (
      <ArticleCardSmall
        {...props}
        renderViews={renderViews}
      />
    ) : (
      <ArticleCardBig
        {...props}
        renderViews={renderViews}
        paragraph={props.paragraph}
      />
    )
  );
};
