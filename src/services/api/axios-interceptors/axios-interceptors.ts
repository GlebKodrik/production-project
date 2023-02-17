import axios from 'axios';
import { ControlLocalStorage } from 'services/control-local-storage';
import { LOCAL_STORAGE_KEYS } from 'constants/local-storage-keys';
import { API_ENDPOINT, FLAGS } from '../../../../configs-project/webpack-configs/constants/variables';

export const axiosInterceptors = axios.create({
  baseURL: API_ENDPOINT,
});

// @ts-ignore
axiosInterceptors.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = ControlLocalStorage.getValueLocalStorage(LOCAL_STORAGE_KEYS.AUTH);
  }

  if (FLAGS.IS_STORYBOOK) {
    return null;
  }

  return config;
});
