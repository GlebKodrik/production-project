import webpack, { RuleSetRule } from 'webpack';
import path from 'path';

import { buildStyleLoader } from '../global-loaders/build-style-loader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');

  // eslint-disable-next-line no-param-reassign
  let rules = config.module!.rules as RuleSetRule[];
  rules = rules.map((rule) => (
    /svg/.test(rule.test as string)
      ? { ...rule, exclude: /\.svg$/i }
      : rule
  ));

  rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  rules.push(buildStyleLoader(true));
  config!.module!.rules = rules;

  return config;
};
