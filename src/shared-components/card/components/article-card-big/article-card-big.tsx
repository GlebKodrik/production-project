import React from 'react';
import cn from 'classnames';
import { useLanguage } from 'hooks/use-language';
import { Link } from '../../../link';
import styles from './article-card-big.module.scss';
import { Typography } from '../../../typography';
import { TProps } from './types';
import { Avatar } from '../../../avatar';
import { Button } from '../../../button';

export const ArticleCardBig = ({
  types,
  to,
  image,
  title,
  color,
  className,
  renderViews,
  user,
  createdAt,
  paragraph,
}:TProps) => {
  const { translation } = useLanguage();
  const renderCreatedAt = () => createdAt
    && <Typography className={styles.createdAt}>{createdAt}</Typography>;

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.wrapperHeader}>
        <Avatar src={user?.avatar} size={50} />
        <Typography color={color} className={styles.username}>
          {user?.username}
        </Typography>
        {renderCreatedAt()}
      </div>
      <Typography color={color} className={styles.title} size="large" tag="h2">{title}</Typography>
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
      <img
        src={image}
        alt="article"
        width="100%"
        height={250}
        className={styles.image}
      />
      <Typography color={color} fontSize={14} className={styles.paragraph}>
        {paragraph}
      </Typography>
      <div className={styles.wrapperReadMore}>
        <Link to={to}>
          <Button color={color} variant="outline">{translation('articles.readMore')}</Button>
        </Link>
        {renderViews()}
      </div>
    </div>
  );
};
