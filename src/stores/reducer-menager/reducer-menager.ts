import {
  AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { TReduxStateScheme } from '@stores/types/redux-state-scheme';
import { TReducerManager, TReduxStateSchemaKey } from '@stores/reducer-menager/types/reducer-menager';

export function createReducerManager(initialReducers: ReducersMapObject<TReduxStateScheme>): TReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<TReduxStateSchemaKey> = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: TReduxStateScheme, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },
    add: (key: TReduxStateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },
    remove: (key: TReduxStateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
