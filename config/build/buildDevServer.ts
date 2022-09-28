import { BuildOptions } from "./types/types";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

const buildDevServer = (): DevServerConfiguration => {
  return {
      open: true,
      historyApiFallback: true,
      hot: true,
  }
}

export default buildDevServer;