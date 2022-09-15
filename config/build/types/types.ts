export type BuildMode = "development" | "production"

export type BuildPaths = {
  BUILD: string,
  ENTRY: string,
  HTML: string,
}

export type BuildOptions = {
  mode: BuildMode,
  paths: BuildPaths,
  isDev: boolean,
  port: number,
}

export type BuildEvn = {
  port: number,
  mode: BuildMode
}