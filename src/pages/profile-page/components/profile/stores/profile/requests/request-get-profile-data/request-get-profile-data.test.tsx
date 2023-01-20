import { ControlLocalStorage } from 'services/control-local-storage';
import { TestAsyncThunk } from 'services/test-async-thunk';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { TProfile } from '../../types';
import { requestGetProfileData } from './index';

describe('Component Profile', () => {
  const data: TProfile = {
    username: 'Kodrik',
    age: '22',
    currency: 'RUB',
    lastname: 'admin',
    country: 'Armenia',
    city: 'Moscow',
    first: 'Gleb',
  };
  beforeEach(() => {
    ControlLocalStorage.setValueLocalStorage = jest.fn();
  });

  test('Checked positivity case', async () => {
    const thunk = new TestAsyncThunk(requestGetProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const response = await thunk.callThunk();
    expect(thunk.api.get).toHaveBeenCalled();
    expect(response.meta.requestStatus).toEqual('fulfilled');
    expect(response.payload).toEqual(data);
  });

  test('Checked negative case', async () => {
    const thunk = new TestAsyncThunk(requestGetProfileData);
    // eslint-disable-next-line prefer-promise-reject-errors
    thunk.api.get.mockReturnValue(Promise.reject({ status: 403 }));

    const { meta } = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(notificationsActions.showNotification({
      severity: 'error',
      message: 'Error loading profile',
    }));
    expect(meta.requestStatus).toBe('rejected');
  });
});
