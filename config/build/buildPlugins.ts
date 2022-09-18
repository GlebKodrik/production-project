import HtmlWebpackPlugin from "html-webpack-plugin";
import {ProgressPlugin, WebpackPluginInstance} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import {BuildOptions} from "./types/types";

const buildPlugins = ({paths}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.HTML
    }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}
export default buildPlugins;