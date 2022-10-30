import { LOCAL_STORAGE_KEYS } from '../constants/local-storage-keys';

export type TLocalStorageKeys = typeof LOCAL_STORAGE_KEYS[keyof typeof LOCAL_STORAGE_KEYS];
