export enum ERoutesName {
  'ABOUT' = 'about',
  'MAIN' = 'main',
}

export const ROUTES_PATH: Record<ERoutesName, string> = {
  [ERoutesName.ABOUT]: '/about',
  [ERoutesName.MAIN]: '/main',
};
