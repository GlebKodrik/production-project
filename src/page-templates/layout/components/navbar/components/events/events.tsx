import React from 'react';
import { Event } from 'shared-components/event';
import Loader from 'shared-components/loader';
import cn from 'classnames';
import { Typography } from 'shared-components/typography';
import styles from './events.module.scss';
import { useEvents } from '../../../../../../api/events/events';

export const Events = () => {
  const { data: eventsList, isLoading, isFetching } = useEvents(null, {
    pollingInterval: 10000,
  });
  const isEmpty = !isLoading && isFetching && !eventsList?.length;

  const renderEventsList = () => eventsList && (
  <div className={styles.eventsList}>
    {eventsList?.map(({
      title, description, href, id,
    }) => (
      <Event
        title={title}
        description={description}
        href={href}
        className={cn(styles.event, { [styles.eventWithLink]: href })}
        key={id}
      />
    ))}
  </div>
  );

  const renderEmptyMessage = () => (
    <div className={styles.center}>
      <Typography size="medium-large">
        Уведомлений нету😴
      </Typography>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      {isLoading && <div className={styles.center}><Loader /></div>}
      {isEmpty ? renderEmptyMessage() : renderEventsList()}
    </div>
  );
};
