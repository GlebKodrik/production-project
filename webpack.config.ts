import { Configuration } from 'webpack';
import buildPlugins from './config/webpack-configs/build-plugins';
import buildLoaders from './config/webpack-configs/build-loaders';
import buildDevServer from './config/webpack-configs/build-dev-server';
import buildResolvers from './config/webpack-configs/build-resolvers';
import { FLAGS, MODE, PATHS } from './config/webpack-configs/variables';

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
  resolve: buildResolvers(),
  devtool: FLAGS.IS_DEVELOPMENT && 'source-map',
};

export default config;
