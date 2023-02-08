import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import i18n from 'configs/i18next';
import { LOCALES } from 'constants/locales';
import { TUser } from '../../types';
import { getEditForm } from '../../selectors';

const NOT_FOUND_AVATAR = 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg';

export const saveProfileData = createAsyncThunk<TUser, string, TThunkConfig<string>>(
  'profile/saveProfileData',
  async (profileId, {
    extra,
    dispatch,
    rejectWithValue,
    getState,
  }) => {
    let ERROR_PUT_PROFILE: string;
    try {
      const profileTranslate = i18n.getFixedT(null, LOCALES.PROFILE_PAGE);
      ERROR_PUT_PROFILE = profileTranslate('form.failedPutProfile');
    } catch (error) {
      ERROR_PUT_PROFILE = 'Error put data';
    }

    const editForm = getEditForm(getState());

    try {
      const response = await extra.api.put<TUser>(`/users/${profileId}`, {
        ...editForm,
        avatar: editForm?.avatar || NOT_FOUND_AVATAR,
      });
      return response.data;
    } catch (error) {
      dispatch(notificationsActions.showNotification({
        severity: 'error',
        message: ERROR_PUT_PROFILE,
      }));
      return rejectWithValue(ERROR_PUT_PROFILE);
    }
  },
);
