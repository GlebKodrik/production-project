import path from 'path';

const ROOT_PATH = path.resolve('./');

const PATHS = {
  ROOT_PATH,
  SRC_FOLDER: path.resolve(ROOT_PATH, 'src'),
  ENTRY_FILE_IN_SRC: path.resolve(ROOT_PATH, 'src', 'index.tsx'),
  DIST_FOLDER: path.resolve(ROOT_PATH, 'dist'),
  INDEX_HTML_FILE: path.resolve(ROOT_PATH, 'public', 'index.html'),
};

export {
  PATHS,
};
