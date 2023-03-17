import { ReactNode } from 'react';
import { Reducer } from '@reduxjs/toolkit';
import { TReduxStateSchemaKey } from '@/redux-stores/reducer-menager/types/reducer-menager';

export type TReducersList = {
  name: TReduxStateSchemaKey,
  reducer: Reducer,
};

export type TDynamicModuleLoaderProps = {
  reducers: TReducersList[];
  removeAfterUnmount?: boolean;
  children: ReactNode
};
