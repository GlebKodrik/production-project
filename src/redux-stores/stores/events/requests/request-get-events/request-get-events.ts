import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import i18n from 'configs/i18next';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import { TEvents } from '../../types';

export const requestGetEvents = createAsyncThunk<TEvents[], void, TThunkConfig<string>>(
  'events/requestGetEvents',
  async (
    _,
    { extra, dispatch, rejectWithValue },
  ) => {
    const ERROR_GET_EVENTS = i18n.t('events.errorRequestGetEvents');
    try {
      const response = await extra.api.get<TEvents[]>('/notifications');
      return response.data;
    } catch (error) {
      dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: ERROR_GET_EVENTS,
      }));
      return rejectWithValue(ERROR_GET_EVENTS);
    }
  },
);
