import { TLocalStorageKeys } from '../../types/local-storage-key';

export class ControlLocalStorage {
  static getValueLocalStorage(localStorageKey: TLocalStorageKeys): string {
    const valueLocalStorage = window.localStorage.getItem(localStorageKey);

    try {
      return JSON.parse(valueLocalStorage);
    } catch (error) {
      return valueLocalStorage;
    }
  }

  static setValueLocalStorage(localStorageKey: TLocalStorageKeys, value: any): void {
    if (typeof value === 'string') {
      localStorage.setItem(localStorageKey, value);
      return;
    }

    try {
      localStorage.setItem(localStorageKey, JSON.stringify(value));
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
}
