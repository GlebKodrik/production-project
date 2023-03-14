import type { TReduxStateScheme } from 'redux-stores/types/redux-state-scheme';

export const getEventsList = (state: TReduxStateScheme) => state.events.eventsList;
export const getEventsError = (state: TReduxStateScheme) => state.events.error;
export const getEventsLoading = (state: TReduxStateScheme) => state.events.isLoading;
export const getEventsIsFinished = (state: TReduxStateScheme) => state.events.isFinished;
