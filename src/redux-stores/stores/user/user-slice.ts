import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ControlLocalStorage } from 'services/control-local-storage';
import { LOCAL_STORAGE_KEYS } from 'constants/local-storage-keys';
import { TUserScheme } from './types';
import { TUser } from '../profile/types';

const initialState: TUserScheme = {
  userData: undefined,
  isAuth: false,
  mounted: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.userData = action.payload;
      state.isAuth = true;
      ControlLocalStorage.setValueLocalStorage(LOCAL_STORAGE_KEYS.AUTH, action.payload);
    },
    verificationAuthUser: (state) => {
      const user = ControlLocalStorage.getValueLocalStorage<TUser>(LOCAL_STORAGE_KEYS.AUTH);
      if (user) {
        state.userData = user;
        state.isAuth = true;
      } else {
        state.isAuth = false;
      }
      state.mounted = true;
    },
    logout: (state) => {
      state.isAuth = false;
      state.userData = undefined;
      ControlLocalStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
