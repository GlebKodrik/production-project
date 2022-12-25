import { ReactNode } from 'react';
import { TReduxStateSchemaKey } from '@stores/reducer-menager/types/reducer-menager';
import { Reducer } from '@reduxjs/toolkit';

export type TReducersList = {
  name: TReduxStateSchemaKey,
  reducer: Reducer,
};

export type TDynamicModuleLoaderProps = {
  reducers: TReducersList[];
  removeAfterUnmount?: boolean;
  children: ReactNode
};
