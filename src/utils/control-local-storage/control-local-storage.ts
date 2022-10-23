class ControlLocalStorage {
  static getValueLocalStorage(localStorageKey: string): string {
    return JSON.parse(localStorage.getItem(localStorageKey));
  }

  static setValueLocalStorage(localStorageKey: string, value: any): void {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }
}

export default ControlLocalStorage;
