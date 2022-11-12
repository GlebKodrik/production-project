import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { FLAGS } from '../webpack-configs/constants/variables';

export const buildStyleLoader = () => ({
  test: /\.s[ac]ss$/i,
  use: [
    FLAGS.IS_DEVELOPMENT ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: true,
          localIdentName: FLAGS.IS_DEVELOPMENT ? '[name]__[local]__[hash:base64:5]' : '[hash:base64:5]',
          exportLocalsConvention: 'camelCase',
        },
      },
    },
    'sass-loader',
  ],
});
