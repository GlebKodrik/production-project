import buildWebpackConfig from "./config/build/buildWebpackConfig";
import {BuildEvn, BuildMode, BuildPaths} from "./config/build/types/types";
import path from "path";

export default (env: BuildEvn) => {
  const PATHS: BuildPaths = {
    BUILD: path.resolve(__dirname, 'dist'),
    ENTRY: path.resolve(__dirname, 'src', 'index.tsx'),
    HTML: path.resolve(__dirname, 'public', 'index.html')
  }

  const PORT = env.port || 3000;
  const mode: BuildMode = env.mode || "development";
  const isDev = mode === "development";

  return buildWebpackConfig({
    mode,
    port: PORT,
    paths: PATHS,
    isDev
  })
};