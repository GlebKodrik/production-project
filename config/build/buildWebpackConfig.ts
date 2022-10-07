import { Configuration } from 'webpack';
import buildPlugins from './buildPlugins';
import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/types';
import buildDevServer from './buildDevServer';

const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { MODE, PATHS, IS_DEV } = options;

  return {
    mode: MODE,
    entry: {
      bundle: PATHS.ENTRY,
    },
    output: {
      filename: '[name].js?[contenthash]',
      path: PATHS.BUILD,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    devServer: buildDevServer(),
    resolve: buildResolvers(),
    devtool: IS_DEV && 'inline-source-map',
  };
};

export default buildWebpackConfig;
