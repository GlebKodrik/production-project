import path from 'path';

const ROOT_PATH = path.resolve('./');

const CACHE_LIFETIME = 86400;

const ENVIRONMENTS = {
  DEVELOPMENT: 'development',
  ANALYZER: 'analyzer',
  PRODUCTION: 'production',
} as const;

const CURRENT_ENVIRONMENT = process.env.NODE_ENV || ENVIRONMENTS.DEVELOPMENT;

const PATHS = {
  ENTRY_FILE_IN_SRC: path.resolve(ROOT_PATH, 'src', 'index.tsx'),
  DIST_FOLDER: path.resolve(ROOT_PATH, 'dist'),
  INDEX_HTML_FILE: path.resolve(ROOT_PATH, 'public', 'index.html'),
  WEBPACK_CACHE_FOLDER: path.resolve(ROOT_PATH, '.caches', '.webpack'),
  ESLINT_CACHE_FOLDER: path.resolve(ROOT_PATH, '.caches', '.eslint'),
  STYLELINT_CACHE_FOLDER: path.resolve(ROOT_PATH, '.caches', '.stylelint'),
};

const scriptExtensions = ['.tsx', '.ts', '.js'];
const styleExtensions = ['.scss', '.css'];

const FLAGS = {
  IS_DEVELOPMENT: CURRENT_ENVIRONMENT === ENVIRONMENTS.DEVELOPMENT,
  IS_ANALYZER: CURRENT_ENVIRONMENT === ENVIRONMENTS.ANALYZER,
  IS_PRODUCTION: CURRENT_ENVIRONMENT === ENVIRONMENTS.PRODUCTION,
};

const MODE = FLAGS.IS_PRODUCTION ? ENVIRONMENTS.PRODUCTION : ENVIRONMENTS.DEVELOPMENT;

export {
  PATHS,
  FLAGS,
  MODE,
  CACHE_LIFETIME,
  scriptExtensions,
  styleExtensions,
};
