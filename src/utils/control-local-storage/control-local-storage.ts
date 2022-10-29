import { TLocalStorageKeys } from '../../types/local-storage-key';

export class ControlLocalStorage {
  private static isExistWindow = typeof window !== 'undefined';

  private static getErrorTextWithAbsenceWindow = (
    localStorageKey: TLocalStorageKeys,
  ) => `Tried setting localStorage key “${localStorageKey}” even though environment is not a client`;

  static getValueLocalStorage(localStorageKey: TLocalStorageKeys): string {
    if (!this.isExistWindow) {
      throw Error(this.getErrorTextWithAbsenceWindow(localStorageKey));
    }

    const valueLocalStorage = window.localStorage.getItem(localStorageKey);

    if (typeof valueLocalStorage === 'string') {
      return valueLocalStorage;
    }
    try {
      return JSON.parse(valueLocalStorage);
    } catch (error) {
      throw Error(`Error reading localStorage key “${localStorageKey}”:`, error);
    }
  }

  static setValueLocalStorage(localStorageKey: TLocalStorageKeys, value: string): void {
    if (!this.isExistWindow) {
      throw Error(this.getErrorTextWithAbsenceWindow(localStorageKey));
    }

    if (typeof value === 'string') {
      localStorage.setItem(localStorageKey, value);
      return;
    }

    try {
      localStorage.setItem(localStorageKey, JSON.parse(value));
    } catch (error) {
      throw Error(`Error setting localStorage key “${localStorageKey}”:`, error);
    }
  }
}
