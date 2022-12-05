import webpack, { RuleSetRule } from 'webpack';
import path from 'path';

import { buildStyleLoader } from '../global-loaders/build-style-loader';
import { ALIAS } from '../constants/alias';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = ALIAS;

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules.push(buildStyleLoader(true));

  return config;
};
