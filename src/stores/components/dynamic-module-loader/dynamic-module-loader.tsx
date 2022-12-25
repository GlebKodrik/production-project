import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { TReduxStoreWithManager } from '@stores/reducer-menager/types/reducer-menager';
import {
  TDynamicModuleLoaderProps,
  TReducersList,
} from '@stores/components/dynamic-module-loader/types/dynamic-module-loader';

export const DynamicModuleLoader: React.FC<TDynamicModuleLoaderProps> = ({
  children,
  reducers,
  removeAfterUnmount = true,
}) => {
  const store = useStore() as TReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    reducers.forEach(({ name, reducer }: TReducersList) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        reducers.forEach(({ name }: TReducersList) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
};
