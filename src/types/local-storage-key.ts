import { LOCAL_STORAGE_KEYS } from '../constants/local-storage-key';

export type TLocalStorageKeys = typeof LOCAL_STORAGE_KEYS[keyof typeof LOCAL_STORAGE_KEYS];
