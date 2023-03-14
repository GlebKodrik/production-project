import React from 'react';
import { TProps } from './types';
import { Typography } from '../typography';
import { Link } from '../link';
import styles from './event.module.scss';

export const Event = ({ title, description, href }: TProps) => {
  const renderContent = () => (
    <>
      <Typography size="medium-large" className={styles.title}>{title}</Typography>
      <Typography size="medium">{description}</Typography>
    </>
  );

  const renderBody = () => {
    const content = renderContent();
    if (href) {
      return (
        <Link to={href}>
          {content}
        </Link>
      );
    }

    return content;
  };

  return (
    renderBody()
  );
};
