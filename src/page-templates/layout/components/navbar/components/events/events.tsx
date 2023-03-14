import React, { useEffect } from 'react';
import { useAppDispatch } from 'hooks/use-app-dispatch';
import { requestGetEvents } from 'redux-stores/stores/events/requests/request-get-events';
import { useSelector } from 'react-redux';
import { getEventsList, getEventsLoading } from 'redux-stores/stores/events/selectors/get-events';
import { Event } from 'shared-components/event';
import Loader from 'shared-components/loader';
import styles from './events.module.scss';

export const Events = () => {
  const dispatch = useAppDispatch();
  const eventsList = useSelector(getEventsList);
  const isLoading = useSelector(getEventsLoading);
  // const isFinished = useSelector(getEventsIsFinished);

  useEffect(() => {
    dispatch(requestGetEvents());
  }, []);

  const renderEventsList = () => eventsList && eventsList?.map(({
    title, description, href, id,
  }) => (
    <div className={styles.event} key={id}>
      <Event title={title} description={description} href={href} />
    </div>

  ));

  return (
    <div className={styles.wrapper}>
      {isLoading && <div className={styles.loader}><Loader /></div>}
      {renderEventsList()}
    </div>
  );
};
