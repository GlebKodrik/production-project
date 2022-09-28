import { Configuration } from 'webpack';
import buildPlugins from './buildPlugins';
import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import { BuildOptions } from './types/types';
import buildDevServer from './buildDevServer';

const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: {
      bundle: paths.ENTRY,
    },
    output: {
      filename: '[name].js?[contenthash]',
      path: paths.BUILD,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    devServer: buildDevServer(),
    resolve: buildResolvers(),
    devtool: isDev && 'inline-source-map',
  };
};

export default buildWebpackConfig;
