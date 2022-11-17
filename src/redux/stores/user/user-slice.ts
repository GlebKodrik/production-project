import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser, TUserScheme } from './types';
import { ControlLocalStorage } from '../../../utils/control-local-storage';
import { LOCAL_STORAGE_KEYS } from '../../../constants/local-storage-keys';

const initialState: TUserScheme = {
  userData: null,
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.userData = action.payload;
      state.isAuth = true;
    },
    verificationAuthUser: (state) => {
      const user = ControlLocalStorage.getValueLocalStorage<TUser>(LOCAL_STORAGE_KEYS.AUTH);
      if (user) {
        state.userData = user;
        state.isAuth = true;
      } else {
        state.isAuth = false;
      }
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
