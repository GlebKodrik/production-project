import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/types';
import { buildStyleLoader } from '../global-loaders/build-style-loader';

const buildLoaders = ({ IS_DEV }: BuildOptions): RuleSetRule[] => {
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

  const cssLoader = buildStyleLoader(IS_DEV);

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
