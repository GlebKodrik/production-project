import path from 'path';
import { PATHS } from '../webpack-configs/constants/path';

export const ALIAS = {
  app: path.resolve(PATHS.SRC_FOLDER, 'app'),
  configs: path.resolve(PATHS.SRC_FOLDER, 'configs'),
  constants: path.resolve(PATHS.SRC_FOLDER, 'constants'),
  contexts: path.resolve(PATHS.SRC_FOLDER, 'contexts'),
  types: path.resolve(PATHS.SRC_FOLDER, 'types'),
  feature: path.resolve(PATHS.SRC_FOLDER, 'feature'),
  hooks: path.resolve(PATHS.SRC_FOLDER, 'hooks'),
  'page-templates': path.resolve(PATHS.SRC_FOLDER, 'page-templates'),
  pages: path.resolve(PATHS.SRC_FOLDER, 'pages'),
  providers: path.resolve(PATHS.SRC_FOLDER, 'providers'),
  'redux-stores': path.resolve(PATHS.SRC_FOLDER, 'redux-stores'),
  services: path.resolve(PATHS.SRC_FOLDER, 'services'),
  'shared-components': path.resolve(PATHS.SRC_FOLDER, 'shared-components'),
  styles: path.resolve(PATHS.SRC_FOLDER, 'styles'),
  utils: path.resolve(PATHS.SRC_FOLDER, 'utils'),
  assets: path.resolve(PATHS.SRC_FOLDER, 'assets'),
};
