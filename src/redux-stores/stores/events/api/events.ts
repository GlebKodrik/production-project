import { TEvents } from './types';
import { rtkQueryApi } from '../../../../services/api/rtk-query-api';

const notificationApi = rtkQueryApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<TEvents[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const useEvents = notificationApi.useGetNotificationsQuery;
