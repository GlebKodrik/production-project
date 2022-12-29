import axios from 'axios';
import { userActions } from 'redux-stores/redux-stores/user';
import { TUser } from 'redux-stores/redux-stores/user/types';
import { ControlLocalStorage } from 'services/control-local-storage';
import { LOCAL_STORAGE_KEYS } from 'constants/local-storage-keys';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import i18n from 'configs/i18next';
import { TestAsyncThunk } from 'services/test-async-thunk';
import { requestLoginByUser } from './stores/login-form/requests/request-login-by-user';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

const userInfo: TUser = {
  id: '2',
  username: 'string',
};

describe('Component AuthByUsernameForm', () => {
  beforeEach(() => {
    ControlLocalStorage.setValueLocalStorage = jest.fn();
  });

  test('Checked positivity case', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userInfo }));

    const thunk = new TestAsyncThunk(requestLoginByUser);
    const { meta } = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUser(userInfo));
    expect(thunk.dispatch).toHaveBeenCalledWith(notificationsActions.showNotification({
      severity: 'success',
      message: i18n.t('auth.successfulLogin'),
    }));
    expect(ControlLocalStorage.setValueLocalStorage).toHaveBeenCalledWith(LOCAL_STORAGE_KEYS.AUTH, userInfo);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(meta.requestStatus).toBe('fulfilled');
  });

  test('Checked negative case', async () => {
    const ERROR_MESSAGE_LOGIN = i18n.t('auth.failedLogin');
    // eslint-disable-next-line prefer-promise-reject-errors
    mockedAxios.post.mockReturnValue(Promise.reject({ status: 403 }));

    const thunk = new TestAsyncThunk(requestLoginByUser);
    const { meta } = await thunk.callThunk({ username: '123', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.setUser(userInfo));
    expect(thunk.dispatch).toHaveBeenCalledWith(notificationsActions.showNotification({
      severity: 'error',
      message: ERROR_MESSAGE_LOGIN,
    }));
    expect(ControlLocalStorage.setValueLocalStorage).not.toHaveBeenCalledWith(LOCAL_STORAGE_KEYS.AUTH, userInfo);
    expect(meta.requestStatus).toBe('rejected');
  });
});
