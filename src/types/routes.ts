import { ROUTES_PATH } from '../constants/routers';

export type TRoutesPath = typeof ROUTES_PATH[keyof typeof ROUTES_PATH];
