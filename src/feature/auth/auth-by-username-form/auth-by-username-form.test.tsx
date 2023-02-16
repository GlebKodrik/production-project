import { userActions } from 'redux-stores/stores/user';
import { ControlLocalStorage } from 'services/control-local-storage';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import i18n from 'configs/i18next';
import { TestAsyncThunk } from 'services/test-async-thunk';
import { requestLoginByUser } from './stores/login-form/requests/request-login-by-user';
import { TUser } from '../../../redux-stores/stores/profile/types';

const userInfo: TUser = {
  id: '2',
  username: 'string',
};

describe('Component AuthByUsernameForm', () => {
  beforeEach(() => {
    ControlLocalStorage.setValueLocalStorage = jest.fn();
  });

  test('Checked positivity case', async () => {
    const thunk = new TestAsyncThunk(requestLoginByUser);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userInfo }));

    const { meta } = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setUser(userInfo));
    expect(thunk.dispatch).toHaveBeenCalledWith(notificationsActions.showNotification({
      severity: 'success',
      message: i18n.t('auth.successfulLogin'),
    }));
    expect(thunk.api.post).toHaveBeenCalled();
    expect(meta.requestStatus).toBe('fulfilled');
  });

  test('Checked negative case', async () => {
    const ERROR_MESSAGE_LOGIN = i18n.t('auth.failedLogin');
    const thunk = new TestAsyncThunk(requestLoginByUser);
    // eslint-disable-next-line prefer-promise-reject-errors
    thunk.api.post.mockReturnValue(Promise.reject({ status: 403 }));

    const { meta } = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).not.toHaveBeenCalledWith(userActions.setUser(userInfo));
    expect(thunk.dispatch).toHaveBeenCalledWith(notificationsActions.showNotification({
      severity: 'error',
      message: ERROR_MESSAGE_LOGIN,
    }));
    expect(meta.requestStatus).toBe('rejected');
  });
});
