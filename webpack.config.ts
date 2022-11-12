import { Configuration } from 'webpack';
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
  },
  devtool: FLAGS.IS_DEVELOPMENT && 'source-map',
};

export default config;
