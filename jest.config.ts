export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: [
    '<rootDir>/src',
    'node_modules',
  ],
  testMatch: [
    // Обнаружил разницу между МАК ОС и ВИНДОУС!!!
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>configs-project/jest/setup.ts'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac)$':
      '<rootDir>configs-project/jest/file-mock.tsx',
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>configs-project/jest/jest-empty-component.tsx',
  },
  transformIgnorePatterns: ['node_modules/(?!axios)'],
};
