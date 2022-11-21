import { Configuration } from 'webpack';
import path from 'path';
import buildPlugins from './configs-project/webpack-configs/build-plugins';
import buildLoaders from './configs-project/webpack-configs/build-loaders';
import buildDevServer from './configs-project/webpack-configs/build-dev-server';
import {
  FLAGS,
  MODE,
  scriptExtensions,
} from './configs-project/webpack-configs/constants/variables';
import { PATHS } from './configs-project/webpack-configs/constants/path';

const config: Configuration = {
  mode: MODE,
  entry: {
    bundle: PATHS.ENTRY_FILE_IN_SRC,
  },
  output: {
    filename: '[name].js',
    path: PATHS.DIST_FOLDER,
    clean: true,
  },
  plugins: buildPlugins(),
  module: {
    rules: buildLoaders(),
  },
  devServer: buildDevServer(),
  resolve: {
    extensions: scriptExtensions,
    alias: {
      '@app': path.resolve(PATHS.SRC_FOLDER, 'app'),
      '@configs': path.resolve(PATHS.SRC_FOLDER, 'configs'),
      '@constants': path.resolve(PATHS.SRC_FOLDER, 'constants'),
      '@contexts': path.resolve(PATHS.SRC_FOLDER, 'contexts'),
      '@custom-types': path.resolve(PATHS.SRC_FOLDER, 'custom-custom-custom-types'),
      '@feature': path.resolve(PATHS.SRC_FOLDER, 'feature'),
      '@hooks': path.resolve(PATHS.SRC_FOLDER, 'hooks'),
      '@page-templates': path.resolve(PATHS.SRC_FOLDER, 'page-templates'),
      '@pages': path.resolve(PATHS.SRC_FOLDER, 'pages'),
      '@providers': path.resolve(PATHS.SRC_FOLDER, 'providers'),
      '@stores': path.resolve(PATHS.SRC_FOLDER, 'stores'),
      '@services': path.resolve(PATHS.SRC_FOLDER, 'services'),
      '@shared-components': path.resolve(PATHS.SRC_FOLDER, 'shared-components'),
      '@styles': path.resolve(PATHS.SRC_FOLDER, 'styles'),
      '@utils': path.resolve(PATHS.SRC_FOLDER, 'utils'),
    },
  },
  devtool: FLAGS.IS_DEVELOPMENT && 'source-map',
};

export default config;
