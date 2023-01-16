import { createAsyncThunk } from '@reduxjs/toolkit';
import { notificationsActions } from 'feature/notifications/stores/notifications';
import { TThunkConfig } from 'redux-stores/types/thunk-config';
import i18n from 'configs/i18next';
import { LOCALES } from 'constants/locales';
import { TProfile } from '../../types';
import { getEditForm } from '../../selectors/getEditForm';

export const saveProfileData = createAsyncThunk<TProfile, void, TThunkConfig<string>>(
  'profile/saveProfileData',
  async (_, {
    extra,
    dispatch,
    rejectWithValue,
    getState,
  }) => {
    const profileTranslate = i18n.getFixedT(null, LOCALES.PROFILE);
    const ERROR_PUT_PROFILE = profileTranslate('failedPutProfile');
    const editForm = getEditForm(getState());

    try {
      const response = await extra.api.put<TProfile>('/profile', editForm);
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
