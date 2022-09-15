import { BuildOptions } from "./types/types";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

const buildDevServer = ({port}: BuildOptions): DevServerConfiguration => {
  return {
      port,
      open: true,
  }
}

export default buildDevServer;