import { ControlLocalStorage } from './control-local-storage';
import { TLocalStorageKeys } from '../../types/local-storage-key';

describe('Testing ControlLocalStorage', () => {
  beforeEach(() => {
    ControlLocalStorage.clearLocalStorage();
  });

  test('Checking set value type array in local storage', () => {
    ControlLocalStorage.setValueLocalStorage('mode', ['1', 2, 4, { name: 'gleb' }, { name: 'text' }]);
    expect(ControlLocalStorage.getValueLocalStorage('mode')).toStrictEqual(
      ['1', 2, 4, { name: 'gleb' }, { name: 'text' }],
    );
  });

  test('Checking set value type object in local storage', () => {
    ControlLocalStorage.setValueLocalStorage('mode', { gleb: 1, test: true, main: 'two' });
    expect(ControlLocalStorage.getValueLocalStorage('mode')).toStrictEqual({ gleb: 1, test: true, main: 'two' });
  });

  test('Checking set primitives value in local storage', () => {
    ControlLocalStorage.setValueLocalStorage('mode', 'test');
    expect(ControlLocalStorage.getValueLocalStorage('mode')).toBe('test');

    ControlLocalStorage.setValueLocalStorage('mode', 2);
    expect(ControlLocalStorage.getValueLocalStorage('mode')).toBe(2);

    ControlLocalStorage.setValueLocalStorage('mode', true);
    expect(ControlLocalStorage.getValueLocalStorage('mode')).toBe(true);
  });

  test('Checking clear all local storage', () => {
    ControlLocalStorage.setValueLocalStorage('test1' as TLocalStorageKeys, 'test');
    ControlLocalStorage.setValueLocalStorage('test' as TLocalStorageKeys, 'test');

    ControlLocalStorage.clearLocalStorage();

    expect(ControlLocalStorage.getValueLocalStorage('test1' as TLocalStorageKeys)).toBeNull();
    expect(ControlLocalStorage.getValueLocalStorage('test2' as TLocalStorageKeys)).toBeNull();
  });
});
