import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
  WebpackPluginInstance,
  DefinePlugin,
  HotModuleReplacementPlugin,
} from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackBar from 'webpackbar';
import { FLAGS, PATHS } from './variables';

const buildPlugins = (): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: PATHS.INDEX_HTML_FILE,
      hash: true,
    }),
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(FLAGS.IS_DEVELOPMENT),
    }),
  ];

  if (FLAGS.IS_DEVELOPMENT) {
    plugins.push(
      new HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin(),
    );
  }

  if (FLAGS.IS_ANALYZER) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: true,
      }),
    );
  }

  return plugins;
};
export default buildPlugins;
