import path from 'path';

const ROOT_PATH = path.resolve('./');

const PATHS = {
  ROOT_PATH,
  SRC_FOLDER: path.resolve(ROOT_PATH, 'src'),
  ENTRY_FILE_IN_SRC: path.resolve(ROOT_PATH, 'src', 'main.tsx'),
  DIST_FOLDER: path.resolve(ROOT_PATH, 'dist'),
  INDEX_HTML_FILE: path.resolve(ROOT_PATH, 'public', 'index.html'),
  LOCALES: path.resolve(ROOT_PATH, 'public', 'locales'),
  IN_DIST_LOCALES: path.resolve(ROOT_PATH, 'dist', 'locales'),
};

export {
  PATHS,
};
