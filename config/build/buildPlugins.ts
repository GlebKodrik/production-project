import HtmlWebpackPlugin from "html-webpack-plugin";
import {ProgressPlugin, WebpackPluginInstance} from "webpack";
import {BuildOptions} from "./types/types";

const buildPlugins = ({paths}: BuildOptions): WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: paths.HTML
    }),
    new ProgressPlugin()
  ]
}
export default buildPlugins;