import { RuleSetRule } from 'webpack';
import { buildStyleLoader } from '../global-loaders/build-style-loader';
import { FLAGS } from './variables';

const buildLoaders = (): RuleSetRule[] => {
  const typeScriptLoader = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
  };

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };

  const cssLoader = buildStyleLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    babelLoader,
    typeScriptLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ];
};

export default buildLoaders;
