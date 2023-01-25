import React from 'react';
import cn from 'classnames';
import { TCommentCardProps } from './types';
import { Avatar } from '../avatar';
import { Typography } from '../typography';
import styles from './comment-card.module.scss';

export const CommentCard = ({
  imageSrc,
  username,
  color = 'primary',
  className,
  comment,
}: TCommentCardProps) => {
  if (!comment) {
    return null;
  }

  const classes = {
    [styles[`color-${color}`]]: Boolean(color),
  };
  return (
    <div className={cn(styles.wrapper, className, classes)}>
      <div className={styles.wrapperAvatar}>
        <Avatar src={imageSrc} alt="avatar" className={styles.avatar} />
        <Typography color={color}>{username}</Typography>
      </div>
      <Typography color={color}>{comment}</Typography>
    </div>
  );
};
