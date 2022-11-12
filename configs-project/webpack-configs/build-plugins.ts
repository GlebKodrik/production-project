import HtmlWebpackPlugin from 'html-webpack-plugin';
import {
  WebpackPluginInstance,
} from 'webpack';
import ESLintPlugin from 'eslint-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WebpackBar from 'webpackbar';
import {
  FLAGS,
  scriptExtensions,
} from './constants/variables';
import { PATHS } from './constants/path';

const buildPlugins = (): WebpackPluginInstance[] => {
  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: PATHS.INDEX_HTML_FILE,
      hash: true,
    }),
    new ESLintPlugin({
      extensions: scriptExtensions,
      exclude: 'node_modules',
      context: 'src',
    }),
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ];

  if (FLAGS.IS_DEVELOPMENT) {
    plugins.push(
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
