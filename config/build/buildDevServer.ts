import { BuildOptions } from "./types/types";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

const buildDevServer = ({port}: BuildOptions): DevServerConfiguration => {
  return {
      port,
      open: true,
      historyApiFallback: true,
  }
}

export default buildDevServer;