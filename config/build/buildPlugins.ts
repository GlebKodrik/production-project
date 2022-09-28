import HtmlWebpackPlugin from "html-webpack-plugin";
import {WebpackPluginInstance, DefinePlugin, HotModuleReplacementPlugin} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const WebpackBar = require('webpackbar');

import {BuildOptions} from "./types/types";

const buildPlugins = ({paths, isDev}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.HTML
    }),
    new WebpackBar(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new DefinePlugin({
      '__IS_DEV__': JSON.stringify(isDev),
    }),
    new HotModuleReplacementPlugin(),
  ]
}
export default buildPlugins;