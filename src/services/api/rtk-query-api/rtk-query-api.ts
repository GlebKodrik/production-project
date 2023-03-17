import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LOCAL_STORAGE_KEYS } from '@/constants/local-storage-keys';
import { API_ENDPOINT } from '../../../../configs-project/webpack-configs/constants/variables';
import { ControlLocalStorage } from '../../control-local-storage';

export const rtkQueryApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_ENDPOINT,
    prepareHeaders: ((headers) => {
      const token = ControlLocalStorage.getValueLocalStorage(LOCAL_STORAGE_KEYS.AUTH);
      if (token) {
        headers.set('Authorization', token);
      }
      return headers;
    }),
  }),
  endpoints: () => ({}),
});
