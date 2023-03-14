import { babelRemoveProperties } from '../bable-plugins/babel-remove-properties';

export const buildBabelLoader = () => ({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-typescript', { isTSX: true }],
        ['@babel/plugin-transform-runtime'],
        [babelRemoveProperties, { properties: ['data-testid'] }],
      ],
    },
  },
});
