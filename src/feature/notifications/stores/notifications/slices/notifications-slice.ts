import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TNotificationsState } from '../types';
import { getUniqueId } from '../../../../../utils/get-unique-id';

const initialState: TNotificationsState = {
  notifications: [],
};

export const notificationsSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<{ message: string }>) => {
      const notificationMessage = action.payload.message;
      if (!notificationMessage) {
        return;
      }
      state.notifications.push({ message: notificationMessage, id: getUniqueId() });
    },
    deleteNotification: (state, action: PayloadAction<{ id: string | number }>) => {
      state.notifications = state.notifications.filter(({ id }) => id !== action.payload.id);
    },
  },
});

export const { actions: notificationsActions } = notificationsSlice;
export const { reducer: notificationsReducer } = notificationsSlice;
