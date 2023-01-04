import webpack, { RuleSetRule } from 'webpack';
import path from 'path';

import { ResolveOptions } from 'dns';
import { buildStyleLoader } from '../global-loaders/build-style-loader';
import { ALIAS } from '../constants/alias';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push('.ts', '.tsx');
  config!.resolve!.alias = ALIAS;

  // eslint-disable-next-line no-param-reassign
  const rules = config.module!.rules as RuleSetRule[];
  config.module!.rules = rules.map((rule) => (
    /svg/.test(rule.test as string)
      ? { ...rule, exclude: /\.svg$/i }
      : rule
  ));

  rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  rules.push(buildStyleLoader(true));

  return config;
};
