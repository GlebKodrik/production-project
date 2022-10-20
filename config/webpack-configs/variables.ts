import path from 'path';

const ROOT_PATH = path.resolve('./');

const ENVIRONMENTS = {
  DEVELOPMENT: 'development',
  ANALYZER: 'analyzer',
  PRODUCTION: 'production',
} as const;

const CURRENT_ENVIRONMENT = process.env.NODE_ENV || ENVIRONMENTS.PRODUCTION;

const PATHS = {
  ENTRY_FILE_IN_SRC: path.resolve(ROOT_PATH, 'src', 'index.tsx'),
  DIST_FOLDER: path.resolve(ROOT_PATH, 'dist'),
  INDEX_HTML_FILE: path.resolve(ROOT_PATH, 'public', 'index.html'),
};

const FLAGS = {
  IS_DEVELOPMENT: CURRENT_ENVIRONMENT === ENVIRONMENTS.DEVELOPMENT,
  IS_ANALYZER: CURRENT_ENVIRONMENT === ENVIRONMENTS.ANALYZER,
  IS_PRODUCTION: CURRENT_ENVIRONMENT === ENVIRONMENTS.PRODUCTION,
};

const MODE = FLAGS.IS_PRODUCTION ? ENVIRONMENTS.PRODUCTION : ENVIRONMENTS.DEVELOPMENT;
console.log(FLAGS.IS_DEVELOPMENT);
export {
  PATHS,
  FLAGS,
  MODE,
};
