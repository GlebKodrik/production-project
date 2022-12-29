import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { TReduxStateScheme } from '../../redux-stores/types/redux-state-scheme';

export type TOptions = {
  route?: string;
};

export type TComponentRenderProps = {
  component: ReactNode,
  options?: TOptions,
  initialState?: DeepPartial<TReduxStateScheme>
};
