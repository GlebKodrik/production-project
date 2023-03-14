import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { requestGetEvents } from 'redux-stores/stores/events/requests/request-get-events';
import { useSelector } from 'react-redux';
import { getEventsIsFinished, getEventsList, getEventsLoading } from 'redux-stores/stores/events/selectors/get-events';
import { Event } from 'shared-components/event';
import Loader from 'shared-components/loader';
import cn from 'classnames';
import { Typography } from 'shared-components/typography';
import styles from './events.module.scss';

export const Events = () => {
  const dispatch = useAppDispatch();
  const eventsList = useSelector(getEventsList);
  const isLoading = useSelector(getEventsLoading);
  const isFinished = useSelector(getEventsIsFinished);
  const isEmpty = isFinished && !eventsList?.length;

  useEffect(() => {
    dispatch(requestGetEvents());
  }, []);

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
