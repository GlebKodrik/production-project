import { Configuration } from 'webpack';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
// @ts-ignore
import TerserPlugin from 'terser-webpack-plugin';
import buildPlugins from './configs-project/webpack-configs/build-plugins';
import buildLoaders from './configs-project/webpack-configs/build-loaders';
import buildDevServer from './configs-project/webpack-configs/build-dev-server';
import {
  FLAGS,
  MODE,
} from './configs-project/webpack-configs/constants/variables';
import { PATHS } from './configs-project/webpack-configs/constants/path';
import { buildResolve } from './configs-project/webpack-configs/build-resolve';

const config: Configuration = {
  mode: MODE,
  entry: {
    bundle: PATHS.ENTRY_FILE_IN_SRC,
  },
  optimization: {
    usedExports: true,
    minimizer: FLAGS.IS_PRODUCTION ? [
      new TerserPlugin({ parallel: true, extractComments: true }),
      new CssMinimizerPlugin(),
    ] : undefined,
    minimize: FLAGS.IS_PRODUCTION,
  },
  output: {
    filename: '[name].js',
    path: PATHS.DIST_FOLDER,
    clean: true,
    publicPath: '/',
  },
  plugins: buildPlugins(),
  module: {
    rules: buildLoaders(),
  },
  devServer: buildDevServer(),
  resolve: buildResolve(),
  devtool: FLAGS.IS_DEVELOPMENT && 'source-map',
};

export default config;
