import { scriptExtensions } from './constants/variables';
import { ALIAS } from '../constants/alias';

export const buildResolve = () => ({
  extensions: scriptExtensions,
  alias: ALIAS,
});
