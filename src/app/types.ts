import React from 'react';
import { ROUTES_PATH } from '../constants/routers';

export type TPath = typeof ROUTES_PATH[keyof typeof ROUTES_PATH];

export type TPagesPathWithComponents = {
  path: TPath,
  component: React.ReactNode,
  isPrivate?: boolean
};

export type TRenderElement = {
  isPrivate?: boolean,
  component: any,
};
