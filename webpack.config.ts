import { Configuration } from 'webpack';
import buildPlugins from './configs/webpack-configs/build-plugins';
import buildLoaders from './configs/webpack-configs/build-loaders';
import buildDevServer from './configs/webpack-configs/build-dev-server';
import {
  CACHE_LIFETIME,
  FLAGS,
  MODE,
  PATHS,
  scriptExtensions,
} from './configs/webpack-configs/variables';

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
  },
  cache: {
    type: 'filesystem',
    cacheLocation: PATHS.WEBPACK_CACHE_FOLDER,
    maxAge: CACHE_LIFETIME,
  },
  devtool: FLAGS.IS_DEVELOPMENT && 'source-map',
};

export default config;
