import { RuleSetRule } from 'webpack';
import { buildStyleLoader } from '../global-loaders/build-style-loader';
import { buildBabelLoader } from './loaders/build-babel-loader';

const buildLoaders = (): RuleSetRule[] => {
  const typescriptBabelLoader = buildBabelLoader();

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
    typescriptBabelLoader,
    cssLoader,
    svgLoader,
    fileLoader,
  ];
};

export default buildLoaders;
