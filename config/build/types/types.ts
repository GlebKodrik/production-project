export type BuildMode = 'development' | 'production';

export type BuildPaths = {
  BUILD: string,
  ENTRY: string,
  HTML: string,
};

export type BuildOptions = {
  MODE: BuildMode,
  PATHS: BuildPaths,
  IS_DEV: boolean,
  PORT: number,
  ANALYZER: boolean
};

export type BuildEvn = {
  port: number,
  mode: BuildMode,
  analyzer: boolean
};
