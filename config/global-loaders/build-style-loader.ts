import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildStyleLoader = (isDev: boolean) => ({
  test: /\.s[ac]ss$/i,
  use: [
    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    {
      loader: 'css-loader',
      options: {
        modules: {
          auto: true,
          localIdentName: isDev ? '[name]__[local]' : '[hash:base64:5]',
          exportLocalsConvention: 'camelCase',
        },
      },
    },
    'sass-loader',
  ],
});
