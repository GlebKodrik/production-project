import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TEvents, TEventsScheme } from './types';
import { requestGetEvents } from './requests/request-get-events';

const initialState: TEventsScheme = {
  eventsList: undefined,
  isLoading: false,
  error: undefined,
  isFinished: false,
};

export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestGetEvents.pending, (state) => {
        state.error = undefined;
        state.eventsList = undefined;
        state.isLoading = true;
        state.isFinished = false;
      })
      .addCase(requestGetEvents.fulfilled, (state, action: PayloadAction<TEvents[]>) => {
        state.isLoading = false;
        state.eventsList = action.payload;
        state.isFinished = true;
      })
      .addCase(requestGetEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isFinished = true;
      });
  },
});

export const { actions: eventsActions } = eventsSlice;
export const { reducer: eventsReducer } = eventsSlice;
