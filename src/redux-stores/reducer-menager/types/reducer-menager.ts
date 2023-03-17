import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { TReduxStateScheme } from '@/redux-stores/types/redux-state-scheme';

export type TReduxStateSchemaKey = keyof TReduxStateScheme;

export type TReducerManager = {
  getReducerMap: () => ReducersMapObject<TReduxStateScheme>;
  reduce: (state: TReduxStateScheme, action: AnyAction) => CombinedState<TReduxStateScheme>;
  add: (key: TReduxStateSchemaKey, reducer: Reducer) => void;
  remove: (key: TReduxStateSchemaKey) => void;
};

export interface TReduxStoreWithManager extends EnhancedStore<TReduxStateScheme> {
  reducerManager: TReducerManager;
}
