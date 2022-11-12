import path from 'path';

const ROOT_PATH = path.resolve('./');

const PATHS = {
  ENTRY_FILE_IN_SRC: path.resolve(ROOT_PATH, 'src', 'index.tsx'),
  DIST_FOLDER: path.resolve(ROOT_PATH, 'dist'),
  INDEX_HTML_FILE: path.resolve(ROOT_PATH, 'public', 'index.html'),
  WEBPACK_CACHE_FOLDER: path.resolve(ROOT_PATH, '.caches', '.webpack'),
  ESLINT_CACHE_FOLDER: path.resolve(ROOT_PATH, '.caches', '.eslint'),
  STYLELINT_CACHE_FOLDER: path.resolve(ROOT_PATH, '.caches', '.stylelint'),
};

export {
  PATHS,
};
