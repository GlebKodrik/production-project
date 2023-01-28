import { ComponentType } from 'react';
import { ROUTES_PATH } from '../constants/routers';

export type TPath = typeof ROUTES_PATH[keyof typeof ROUTES_PATH];

export type TPagesPathWithComponents = {
  path: TPath | string,
  component: ComponentType,
  isPrivate?: boolean
};

export type TRenderElement = {
  isPrivate?: boolean,
  component: ComponentType,
};
