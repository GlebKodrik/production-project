import React from 'react';
import cn from 'classnames';
import { TCommentCardProps } from './types';
import { Avatar } from '../avatar';
import { Typography } from '../typography';
import styles from './comment-card.module.scss';
import { Link } from '../link';

export const CommentCard = ({
  avatar,
  username,
  color = 'primary',
  className,
  comment,
  link,
}: TCommentCardProps) => {
  if (!comment) {
    return null;
  }

  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
  };

  const renderContent = () => {
    const children = (
      <div className={styles.wrapperAvatar}>
        <Avatar src={avatar} alt="avatar" className={styles.avatar} />
        <Typography color={color}>{username}</Typography>
      </div>
    );
    if (link) {
      return <Link to={link}>{children}</Link>;
    }
    return children;
  };

  return (
    <div className={cn(className, classes)}>
      {renderContent()}
      <Typography color={color}>{comment}</Typography>
    </div>
  );
};
