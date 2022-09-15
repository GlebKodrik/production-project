import buildPlugins from "./buildPlugins";
import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import {BuildOptions} from "./types/types";
import {Configuration} from "webpack";
import buildDevServer from "./buildDevServer";

const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const {mode, paths, isDev} = options;

  return {
    mode,
    entry: {
      bundle: paths.ENTRY
    },
    output: {
      filename: "[name].js?[contenthash]",
      path: paths.BUILD,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    devServer: buildDevServer(options),
    resolve: buildResolvers(),
    devtool: isDev && 'inline-source-map',
  }
}

export default buildWebpackConfig;