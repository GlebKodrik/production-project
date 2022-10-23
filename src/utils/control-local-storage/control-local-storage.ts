import { TLocalStorageKeys } from '../../types/local-storage-key';

const controlLocalStorage = {
  getValueLocalStorage(localStorageKey: TLocalStorageKeys): string {
    return JSON.parse(localStorage.getItem(localStorageKey));
  },
  setValueLocalStorage(localStorageKey: TLocalStorageKeys, value: any): void {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  },
};

export default controlLocalStorage;
