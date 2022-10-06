import { ResolveOptions } from 'webpack';

const buildResolvers = (): ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
});

export default buildResolvers;
