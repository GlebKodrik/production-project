import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { TReduxStateScheme } from '../../stores/types/redux-state-scheme';

export type TOptions = {
  route?: string;
};

export type TComponentRenderProps = {
  component: ReactNode,
  options?: TOptions,
  initialState?: DeepPartial<TReduxStateScheme>
};
