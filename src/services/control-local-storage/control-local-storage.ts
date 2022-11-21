import { TLocalStorageKeys } from '@custom-types/local-storage-keys';

export class ControlLocalStorage {
  static getValueLocalStorage<T = string>(localStorageKey: TLocalStorageKeys): T {
    const valueLocalStorage = window.localStorage.getItem(localStorageKey);

    try {
      return JSON.parse(valueLocalStorage);
    } catch (error) {
      return (valueLocalStorage as T);
    }
  }

  static setValueLocalStorage(localStorageKey: TLocalStorageKeys, value: any): void {
    if (!value) {
      return;
    }

    if (typeof value === 'string') {
      window.localStorage.setItem(localStorageKey, value);
      return;
    }

    try {
      window.localStorage.setItem(localStorageKey, JSON.stringify(value));
    } catch (error) {
      throw Error(`Error setting localStorage key “${localStorageKey}”:`, error);
    }
  }

  static clearLocalStorage() {
    try {
      window.localStorage.clear();
    } catch (error) {
      throw Error('Error while deleting everything local storage', error);
    }
  }

  static removeItem(localStorageKey: TLocalStorageKeys) {
    try {
      window.localStorage.removeItem(localStorageKey);
    } catch (error) {
      throw Error('Error while deleting everything local storage', error);
    }
  }
}
