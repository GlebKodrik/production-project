import { ComponentType } from 'react';
import { EUserRole } from '../redux-stores/stores/profile/types';
import { TRoutesPath } from '../types/routes';

export type TPagesPathWithComponents = {
  path: TRoutesPath | string,
  component: ComponentType,
  roles?: EUserRole[]
};

export type TRenderElement = {
  path: TRoutesPath | string,
  component: ComponentType,
  roles?: EUserRole[],
};
