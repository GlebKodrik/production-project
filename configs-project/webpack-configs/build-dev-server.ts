import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const buildDevServer = (): DevServerConfiguration => ({
  open: true,
  historyApiFallback: true,
  hot: true,
  client: {
    overlay: {
      errors: true,
      warnings: false,
    },
  },
});

export default buildDevServer;
