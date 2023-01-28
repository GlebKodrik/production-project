import React from 'react';
import { useSelector } from 'react-redux';
import { getComments, getCommentsIsLoading } from 'redux-stores/stores/article-detail/selectors/get-comments';
import { CommentCard, ComponentCardSkeleton } from 'shared-components/comment-card';
import { useLanguage } from 'hooks/use-language';
import { LOCALES } from 'constants/locales';
import { Typography } from 'shared-components/typography';
import { ROUTES_PATH } from 'constants/routers';
import styles from './article-detail-comments.module.scss';

export const ArticleDetailComments = () => {
  const { translation } = useLanguage(LOCALES.ARTICLE_PAGE);
  const comments = useSelector(getComments);
  const isLoading = useSelector(getCommentsIsLoading);

  if (!comments || !comments.length) {
    if (!isLoading) {
      return <Typography color="secondary">{translation('notComment')}</Typography>;
    }
    return null;
  }

  if (isLoading) {
    return <ComponentCardSkeleton />;
  }

  return (
    <>
      {comments.map(({ user, text }) => (
        <CommentCard
          key={user.id}
          avatar={user?.avatar}
          username={user?.username}
          comment={text}
          color="secondary"
          className={styles.comment}
          link={`${ROUTES_PATH.PROFILE}/${user.id}`}
        />
      ))}
    </>
  );
};
