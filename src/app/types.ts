import { ComponentType } from 'react';
import { ROUTES_PATH } from '../constants/routers';
import { EUserRole } from '../redux-stores/stores/profile/types';

export type TPath = typeof ROUTES_PATH[keyof typeof ROUTES_PATH];

export type TPagesPathWithComponents = {
  path: TPath | string,
  component: ComponentType,
  roles?: EUserRole[]
};

export type TRenderElement = {
  component: ComponentType,
  roles?: EUserRole[]
};
