import React from 'react';
import cn from 'classnames';
import { useLanguage } from '@/hooks/use-language';
import { Link } from '../../../link';
import styles from './article-card-small.module.scss';
import { Typography } from '../../../typography';
import { TProps } from './types';

export const ArticleCardSmall = ({
  types,
  to,
  image,
  title,
  color,
  className,
  renderViews,
  createdAt,
}:TProps) => {
  const { translation } = useLanguage();
  const renderCreatedAt = () => createdAt
    && <Typography className={styles.createdAt}>{createdAt}</Typography>;

  return (
    <Link to={to} className={cn(styles.wrapper, className)}>
      {renderCreatedAt()}
      <img
        src={image}
        alt="article"
        width={200}
        height={200}
      />
      {renderViews()}
      <Typography color={color} className={styles.title}>{title}</Typography>
      <div className={styles.themeWrapper}>
        <Typography
          color={color}
          className={styles.themeText}
          fontSize={14}
        >
          {translation('theme')}
          :
        </Typography>
        <Typography color={color} fontSize={14} className={styles.themeType}>
          {types.join(',')}
        </Typography>
      </div>
    </Link>
  );
};
